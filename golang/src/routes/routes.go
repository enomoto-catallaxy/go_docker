package routes

import (
	"go_docker/controller"
	"html/template"
	"strings"

	"github.com/gin-gonic/gin"
)

func nl2br(text string) template.HTML {
	return template.HTML(strings.Replace(template.HTMLEscapeString(text), "\n", "<br />", -1))
}

func Run() {

	// var student1 entity.Student
	// db.Find(&student1).Scan(&student1)

	router := gin.Default()

	router.SetFuncMap(template.FuncMap{
		"nl2br": nl2br,
	})
	router.LoadHTMLGlob("template/*.html")

	router.GET("/", controller.Root)
	router.GET("/ping", controller.Ping)
	router.GET("/articles", controller.Articles)
	router.POST("/article/:id", controller.Article)

	router.Run(":8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
