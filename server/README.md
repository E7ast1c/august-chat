docker run --name august-chat -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres:12.4

goose postgres "user=postgres dbname=postgres password=password  sslmode=disable" status


