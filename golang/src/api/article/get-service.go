package article

import (
	"database/sql"
	"go_docker/entity"
)

// NOTE: Serviceにてレスポンスに変換
func Service(db *sql.DB) []GetArticleResponse {
	var articles []entity.Article

	rows := GetArticles(db)

	for rows.Next() {
		article := entity.Article{}
		err := rows.Scan(&article.Id, &article.Title, &article.Body)
		if err != nil {
			panic(err)
		}
		articles = append(articles, article)
	}
	rows.Close()

	response := Create(articles)

	return response
}
