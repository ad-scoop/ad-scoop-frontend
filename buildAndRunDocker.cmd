docker build -t"adscoop:v1" .
docker run -p 8080:80 -d adscoop:v1
