# Fastify Todo App

This is a simple Todo application built with Fastify, utilizing oas-fastify for OpenAPI specification 3.0.0 documentation and validation.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Install dependencies:

    ```bash
    cd <project-folder>
    make install
    ```

## Usage

To start the server using Docker Compose, make sure you have Docker installed on your machine. Then, navigate to the project directory and run the following command:

```bash
make start
```

> The server will be running on port 8080 by default

To stop the server and remove the containers, use the following command:

```bash
make stop
```

To clean up the project by removing running containers, volumes, node_modules, coverage, src/openapi.json, and dist, use the following command:

```
make clean
```

## API Documentation

You can access the OpenAPI documentation for the API at [http://localhost:8080](http://localhost:8080). This documentation provides detailed information about the available endpoints, request parameters, responses, and schemas.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

[MIT License](LICENSE)
