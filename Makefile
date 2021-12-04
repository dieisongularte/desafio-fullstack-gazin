.DEFAULT_GOAL := help

NODE_TAG := $(shell cat .env | grep NODE_TAG | sed 's/=/\ /g' | awk '{printf $$2}')

help: ## This help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / \
	{printf "\033[36m%-25s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

create-dotenv-files: ## Create dotenv files
	@[ -f .env ] || cat .env.example > .env
	@[ -f ./database/.env ] || cat ./database/.env.example > ./database/.env

remove-dotenv-files: ## Remove dotenv files
	@[ ! -f .env ] || rm .env
	@[ ! -f ./database/.env ] || rm ./database/.env

up: create-dotenv-files ## Build and run containers
	@docker-compose up --build -d

down: ## Stop running containers
	@docker-compose down $(flags)

show: ## Show running containers
	@docker-compose ps

logs: ## Show docker logs for a container
	@docker logs $(container) -f

exec-in-container: ## Execute a command in a container
	@docker exec -it $(container) $(command)

install-app-dependencies: ## Install app dependencies locally
	@docker run --rm -it \
		-v "$(PWD)"/app:/var/www/html \
		-w /var/www/html \
		node:$(NODE_TAG) \
		npm install