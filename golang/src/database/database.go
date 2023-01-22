package database

import (
	"database/sql"
	"fmt"
	"go_docker/common"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func ConnectDB() *gorm.DB {
	var path string = fmt.Sprintf("%s:%s@tcp(db:3306)/%s?charset=utf8&parseTime=true",
		os.Getenv("MYSQL_USER"), os.Getenv("MYSQL_PASSWORD"),
		os.Getenv("MYSQL_DATABASE"))

	db := open(path)

	common.Migrate(db)

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

	// sqlDB.Close()

	fmt.Println("db connected!!")
	return db
}
