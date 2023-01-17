package service

import (
	"fmt"
	"go_docker/entity"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetArticles(db *gorm.DB) []entity.Article {

	var articles []entity.Article

	db.Find(&articles).Scan(&articles)

	return articles
}

func GetArticle(db *gorm.DB, id gin.Params) entity.Article {

	var article entity.Article

	fmt.Println(id)

	db.Table("articles").Where("id = ?", id[0].Value).Scan(&article)

	return article
}
