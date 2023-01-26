package controller

import (
	"go_docker/database"
	"go_docker/service"
	"net/http"

	"github.com/gin-gonic/gin"
)

func Root(ctx *gin.Context) {
	ctx.HTML(200, "index.html", nil)
}

func Articles(c *gin.Context) {
	db := database.ConnectDB()

	articles := service.GetArticles(db)

	c.JSON(http.StatusOK, articles)

}

func Article(c *gin.Context) {
	db := database.ConnectDB()
	id := c.Params

	article := service.GetArticle(db, id)

	c.JSON(http.StatusOK, article)

}

// func Student(c *gin.Context) {
// 	db := database.ConnectDB()

// 	student := entity.Student{Grade: 2, First_name: "yamada", Last_name: "taro", Came_at_today: time.Now(), Finished_at_today: time.Now()}

// 	db.Create(&student)

// 	c.JSON(http.StatusOK, student)

// }

func Seat(c *gin.Context) {
	db := database.ConnectDB()
	id := c.Params

	seat := service.GetSeatById(db, id)

	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")

	c.JSON(http.StatusOK, seat)
}
