include .app-config

build:
	docker build -t quizapp . 

run:
	docker run -it -p $(APP_PORT):$(APP_PORT) -v $(shell pwd):/app -v /app/node_modules quizapp

run-local:
	yarn start	
