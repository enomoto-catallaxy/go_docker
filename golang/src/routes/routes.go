package routes

import (
	"fmt"
	"go_docker/database"
	"go_docker/service"
	"html/template"
	"net/http"
	"strings"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func nl2br(text string) template.HTML {
	return template.HTML(strings.Replace(template.HTMLEscapeString(text), "\n", "<br />", -1))
}

func Run() {
	router := gin.Default()
	db := database.ConnectDB()

	arrowOrigins := []string{"http://localhost:3000"}
	router.Use(cors.New(cors.Config{
		AllowOrigins: arrowOrigins,
		AllowMethods: []string{
			"POST",
			"GET",
			"OPTIONS",
		},
		AllowHeaders: []string{
			// "Access-Control-Allow-Headers",
			// "Access-Control-Allow-Origin",
			"Content-Type",
			// "Authorization",
			// "Origin",
		},
		// ExposeHeaders: []string{
		// 	"",
		// },
		// AllowCredentials: false,
	}))

	router.SetFuncMap(template.FuncMap{
		"nl2br": nl2br,
	})
	router.LoadHTMLGlob("template/*.html")

	router.GET("/",
		func(ctx *gin.Context) {
			ctx.HTML(200, "index.html", nil)
		},
	)

	router.GET("/articles", func(c *gin.Context) {
		articles := service.GetArticles(db)
		c.JSON(http.StatusOK, articles)
	})

	router.GET("/article/:id", func(c *gin.Context) {
		id := c.Params
		article := service.GetArticle(db, id)
		c.JSON(http.StatusOK, article)
	})

	router.POST("/new/student/:id/:grade", func(c *gin.Context) {
		id := c.Param("id")
		grade := c.Param("grade")

		faistName := c.Query("fn")
		lastName := c.Query("ln")

		fmt.Println(c.Params)
		fmt.Println(c)

		newUser := service.POSTNewUser(db, id, faistName, lastName, grade)
		c.JSON(http.StatusOK, newUser)
	})

	// router.GET("/seat/:id", func(c *gin.Context) {
	// 	id := c.Params

	// 	seat := service.GetSeatById(db, id)

	// 	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")

	// 	c.JSON(http.StatusOK, seat)
	// })

	router.Run(":8080")
}
