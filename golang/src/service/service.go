package service

import (
	"fmt"
	"go_docker/database"
	"go_docker/entity"
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

func POSTNewUser(db *gorm.DB, id string, firstName string, lastName string, grade string) database.User {
	manavisCode, _ := strconv.Atoi(id)
	gradeNumber, _ := strconv.Atoi(grade)
	newUser := database.User{
		Manavis_code: manavisCode,
		Grade:        gradeNumber,
		First_name:   firstName,
		Last_name:    lastName,
	}
	db.Create(&newUser)

	return newUser
}

func POSTWelecomeUesr(db *gorm.DB, id string) database.User {
	manavisCode, _ := strconv.Atoi(id)

	var user database.User
	err := db.Table("users").Where("manavis_code = ?", manavisCode).First(&user).Error
	if err == gorm.ErrRecordNotFound {
		fmt.Println("レコードが見つかりません")
	} else if err != nil {
		fmt.Println("エラーが発生しました")
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
