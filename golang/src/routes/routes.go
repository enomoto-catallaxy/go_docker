package routes

import (
	"go_docker/controller"
	"html/template"
	"strings"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func nl2br(text string) template.HTML {
	return template.HTML(strings.Replace(template.HTMLEscapeString(text), "\n", "<br />", -1))
}

func Run() {
	router := gin.Default()

	router.SetFuncMap(template.FuncMap{
		"nl2br": nl2br,
	})
	router.LoadHTMLGlob("template/*.html")

	router.GET("/", controller.Root)
	router.GET("/articles", controller.Articles)
	router.GET("/article/:id", controller.Article)
	router.GET("/seat/:id", controller.Seat)

	arrowOrigins := []string{"http://localhost:3000"}

	router.Use(cors.New(cors.Config{
		AllowOrigins: arrowOrigins,
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		AllowHeaders: []string{
			"Access-Control-Allow-Headers",
			"Access-Control-Allow-Origin",
			"Content-Type",
			"Authorization",
			"Origin",
		},
		ExposeHeaders: []string{
			"",
		},
		AllowCredentials: false,
		MaxAge:           24 * time.Hour,
	}))

	router.Run(":8080")
}
