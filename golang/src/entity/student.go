package entity

import (
	"time"

	"gorm.io/gorm"
)

// Student has many memos, user_id is the foreign key
// Student has one seat, user_id is the foreign key
type Student struct {
	gorm.Model
	Grade             int
	First_name        string
	Last_name         string
	Came_at_today     time.Time
	Finished_at_today time.Time
	Memos             []Memo
	SeatID            uint
	Seat              Seat
}
