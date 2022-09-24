# 環境構築

```bash
docker-compose build
docker-compose run --rm app bundle install
docker ps
docker exec -it {{CONTAINER_ID}} bash
mysql -uroot -p
mysql> CREATE USER 'root'@'db' IDENTIFIED WITH mysql_native_password BY 'password';
docker-compose run --rm app rails db:create
docker-compose run --rm app rails db:seed
docker-compose up -d
```
