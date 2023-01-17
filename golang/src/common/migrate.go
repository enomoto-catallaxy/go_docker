package common

import (
	"go_docker/entity"

	"gorm.io/gorm"
)

func Migrate(db *gorm.DB) {
	db.AutoMigrate(&entity.Article{})
	db.AutoMigrate(&entity.Student{})
	db.AutoMigrate(&entity.Memo{})
	db.AutoMigrate(&entity.Seat{})
}
