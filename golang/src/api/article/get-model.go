package article

import (
	"go_docker/entity"
)

func Create(articles []entity.Article) []GetArticleResponse {
	var response []GetArticleResponse

	for i := range articles {
		response = append(response, GetArticleResponse{
			Id:    articles[i].Id,
			Title: articles[i].Title,
			Body:  articles[i].Body,
		})
	}

	return response

}
