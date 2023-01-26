package entity

import (
	"time"

	"gorm.io/gorm"
)

type DayInfo struct {
	gorm.Model
	ComeAt    time.Time
	GoHome    time.Time
	StudentID uint
}
