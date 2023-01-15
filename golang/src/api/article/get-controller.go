package article

import (
	"database/sql"
)

func GetController(db *sql.DB) []GetArticleResponse {
	var articles []GetArticleResponse
	articles = Service(db)

	return articles
}
