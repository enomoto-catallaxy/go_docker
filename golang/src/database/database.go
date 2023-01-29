package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type DayInfo struct {
	gorm.Model
	ComeAt *time.Time
	GoHome *time.Time
	UserID uint
}

type User struct {
	gorm.Model
	Manavis_code int `gorm:"unique"`
	Grade        int
	First_name   string
	Last_name    string
	DayInfo      []DayInfo `gorm:"foreignKey:UserID"`
}

func ConnectDB() *gorm.DB {
	var path string = fmt.Sprintf("%s:%s@tcp(db:3306)/%s?charset=utf8&parseTime=true",
		os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PASSWORD"),
		os.Getenv("MYSQL_DATABASE"))

	db := open(path)

	db.AutoMigrate(&User{}, &DayInfo{})

	return db
}

func open(path string) *gorm.DB {
	sqlDB, err := sql.Open("mysql", path)

	db, err := gorm.Open(mysql.New(mysql.Config{
		Conn: sqlDB,
	}), &gorm.Config{})

	if err != nil {
		log.Fatal("open error:", err)
	}

	fmt.Println("db connected!!")
	return db
}
