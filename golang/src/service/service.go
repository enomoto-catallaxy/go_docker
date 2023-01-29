package service

import (
	"fmt"
	"go_docker/database"
	"go_docker/entity"
	"net/http"
	"strconv"
	"time"

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

func GetUserByManavisCode(db *gorm.DB, id string) database.User {
	manavisCode, _ := strconv.Atoi(id)
	var user database.User
	db.Table("users").Where("manavis_code = ?", manavisCode).Scan(&user)
	return user
}

func POSTNewUser(c *gin.Context, db *gorm.DB, id string, firstName string, lastName string, grade string) {
	manavisCode, _ := strconv.Atoi(id)
	gradeNumber, _ := strconv.Atoi(grade)

	var user database.User
	db.Table("users").Where("manavis_code = ?", manavisCode).First(&user)
	if user.Manavis_code == manavisCode {
		c.JSON(http.StatusBadRequest, user)
		fmt.Printf("すでにマナビス生番号%dの生徒が存在します", manavisCode)
		return
	}

	newUser := database.User{
		Manavis_code: manavisCode,
		Grade:        gradeNumber,
		First_name:   firstName,
		Last_name:    lastName,
	}
	db.Create(&newUser)
	c.JSON(http.StatusOK, newUser)
}

func POSTWelecomeUesr(db *gorm.DB, id string) database.User {
	manavisCode, _ := strconv.Atoi(id)

	var user database.User
	err := db.Table("users").Where("manavis_code = ?", manavisCode).First(&user).Error
	if err == gorm.ErrRecordNotFound {
		fmt.Println("レコードが見つかりません")
		return user
	} else if err != nil {
		fmt.Println("エラーが発生しました")
		return user
	}

	now := time.Now()
	comingTime := database.DayInfo{
		ComeAt: &now,
		UserID: user.ID,
	}
	db.Create(&comingTime)

	newDayInfo := append(user.DayInfo, comingTime)

	fmt.Println(newDayInfo)
	user.DayInfo = newDayInfo
	db.Save(&user)
	return user
}
