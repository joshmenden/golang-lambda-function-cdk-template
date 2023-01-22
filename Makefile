build:
	GOOS=linux GOARCH=amd64 go build -o main cmd/main.go

run:
	go run cmd/main.go -local=true

zip:
	zip golang-lambda-function-cdk-template.zip main

clean:
	rm main golang-lambda-function-cdk-template.zip || true

deploy: clean build zip
	cd .infra && cdk deploy
