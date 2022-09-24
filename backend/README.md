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

# seedデータの内容

```
ユーザが5人作成される。idは1~5。
大項目の質問が1つ作成される。idは1のみ。
小項目の質問がユーザごとに3つずつ作成される。小項目idは1~3。
```
