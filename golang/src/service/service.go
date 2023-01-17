package service

import (
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

	db.First(&article, id).Scan(&article)

	return article
}
