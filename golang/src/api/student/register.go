package student

import (
	"go_docker/api/common"
	"go_docker/entity"
	"time"

	"gorm.io/gorm"
)

func Register(db *gorm.DB) {

	common.Migrate(db)

	student := entity.Student{Grade: 2, First_name: "yamada", Last_name: "taro", Came_at_today: time.Now(), Finished_at_today: time.Now()}

	db.Create(&student)
}
