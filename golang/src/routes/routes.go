package routes

import (
	"go_docker/database"
	"go_docker/service"
	"html/template"
	"net/http"
	"strconv"
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

		service.POSTNewUser(c, db, id, faistName, lastName, grade)
	})

	router.POST("/welcome/:id", func(c *gin.Context) {
		id := c.Param("id")
		manavisCode, _ := strconv.Atoi(id)
		user := service.POSTWelecomeUesr(db, id)
		if user.Manavis_code != manavisCode {
			c.JSON(http.StatusBadRequest, user)
		} else {
			c.JSON(http.StatusOK, user)
		}
	})

	router.POST("/goodbye/:id", func(c *gin.Context) {
		id := c.Param("id")
		manavisCode, _ := strconv.Atoi(id)
		user := service.POSTGoodbyeUesr(db, id)
		if user.Manavis_code != manavisCode {
			c.JSON(http.StatusBadRequest, user)
		} else {
			c.JSON(http.StatusOK, user)
		}
	})

	router.GET("/search/student/:grade", func(c *gin.Context) {
		grade_param := c.Param("grade")
		grade, _ := strconv.Atoi(grade_param)

		service.GetUserByGrade(c, db, grade)
	})

	// router.GET("/seat/:id", func(c *gin.Context) {
	// 	id := c.Params

	// 	seat := service.GetSeatById(db, id)

	// 	c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")

	// 	c.JSON(http.StatusOK, seat)
	// })

	router.Run(":8080")
}
