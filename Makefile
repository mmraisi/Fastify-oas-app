#!/usr/bin/make

.PHONY: help
.DEFAULT_GOAL := help



schema: ## generate schjema (spec.json )
	@docker-compose up --build --force-recreate schema

server: ## run the server
	@docker-compose up --build --force-recreate server


run: ## Combined target to run both 'schema' and 'server' services sequentially	
	@schema server

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
