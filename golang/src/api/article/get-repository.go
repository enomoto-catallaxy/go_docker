package article

import (
	"database/sql"
)

func GetArticles(db *sql.DB) *sql.Rows {
	rows, err := db.Query("select * from article;")
	if err != nil {
		panic(err)
	}

	return rows
}
