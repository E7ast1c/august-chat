package api

import "github.com/gin-gonic/gin"

func HttpServer() {
    r := gin.Default()

    r.GET("/", func(c *gin.Context){
        c.String(200, "Hello client")
    })

    r.Run("localhost:8090")
}
