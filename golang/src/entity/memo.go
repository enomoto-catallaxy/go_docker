package entity

import (
	"time"

	"gorm.io/gorm"
)

// `Memo` belongs to `Student`, `StudentID` is the foreign key
type Memo struct {
	ID        uint `gorm:"primaryKey"`
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
	StudentID int            `sql:"index"`
}
