package main

import (
	"go_docker/routes"

	_ "github.com/go-sql-driver/mysql"
)

func main() {
	db := routes.ConnectDB()
	defer db.Close()
	routes.Run(db)
}
