package api

import (
   "github.com/gin-gonic/gin"
   "github.com/gorilla/websocket"
   "log"
   "net/http"
)

var (
   // Websocket http upgrader
   upgrader = websocket.Upgrader{
       ReadBufferSize:  1024,
       WriteBufferSize: 1024,
       CheckOrigin: func(r *http.Request) bool {
          return true
       },
   }
)

func WebSocketsServer()  {
   r := gin.Default()

   r.GET("/ws", func(c *gin.Context){
       Echo(c.Writer,c.Request)
   })

   r.Run("localhost:8080")
}

func Echo(w http.ResponseWriter, r *http.Request, ) {
   c, err := upgrader.Upgrade(w, r, nil)

   if err != nil {
       log.Print("upgrade:", err)
       return
   }
   defer c.Close()
   for {
       mt, message, err := c.ReadMessage()
       if err != nil {
           log.Println("read:", err)
           break
       }
       log.Printf("recv: %s", message)
       err = c.WriteMessage(mt, message)
       if err != nil {
           log.Println("write:", err)
           break
       }
   }
}
