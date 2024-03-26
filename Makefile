#!/usr/bin/make

.PHONY: schema server run

# Target to start the 'schema' service in detached mode
schema:
	@docker-compose up --build --force-recreate schema

# Target to start the 'server' service
server:
	@docker-compose up --build --force-recreate server

# Combined target to run both 'schema' and 'server' services sequentially
run:	schema server