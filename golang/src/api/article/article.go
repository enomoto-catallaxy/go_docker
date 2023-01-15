package article

import (
	"database/sql"
)

// func ReadAll(db *sql.DB) []entity.Article {
// 	var articles []entity.Article
// 	rows, err := db.Query("select * from article;")
// 	if err != nil {
// 		panic(err)
// 	}
// 	for rows.Next() {
// 		article := entity.Article{}
// 		err = rows.Scan(&article.Id, &article.Title, &article.Body)
// 		if err != nil {
// 			panic(err)
// 		}
// 		articles = append(articles, article)
// 	}
// 	rows.Close()

// 	return articles
// }

func Get(db *sql.DB) []GetArticleResponse {
	return GetController(db)
}
