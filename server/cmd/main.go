package main

import (
    "august-chat-server/api"
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()

    r.GET("/ws", func(c *gin.Context){
        api.Echo(c.Writer,c.Request)
    })

    r.GET("/", func(c *gin.Context){
        c.String(200, "Hello client")
    })

    r.Run("localhost:8080")
}
