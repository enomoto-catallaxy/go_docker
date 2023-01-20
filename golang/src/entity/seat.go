package entity

import (
	"time"
)

// `Seat` belongs to `Student`, `StudentID` is the foreign key
type Seat struct {
	SeatID uint `gorm:"primaryKey"`
	// CreatedAt time.Time
	UpdatedAt time.Time
	// DeletedAt gorm.DeletedAt `gorm:"index"`
	Vacant bool
	// StudentID int `sql:"index"`
	// Booked    bool
	// BookedAt  time.Time
}
