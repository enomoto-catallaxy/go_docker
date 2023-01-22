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

	db.Table("articles").Where("id = ?", id[0].Value).Scan(&article)

	return article
}

func GetSeatById(db *gorm.DB, id gin.Params) entity.Seat {
	var seat entity.Seat

	db.Table("seats").Where("seat_id = ?", id[0].Value).Scan(&seat)

	return seat
}
