package routes

import (
	"go_docker/api/article"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func RunArticles(router *gin.Engine, db *gorm.DB) {

	articles := article.ReadAll(db)

	router.GET("/articles", func(c *gin.Context) {
		c.JSON(http.StatusOK, articles)
	})
}
