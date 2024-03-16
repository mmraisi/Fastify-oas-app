
# Fastify Todo App

This is a simple Todo application built with Fastify, utilizing oas-fastify for OpenAPI specification 3.0.0 documentation and validation.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ````

2. Install dependencies:

   ```bash
   cd <project-folder>
   npm install
   ```

## Usage

To start the server using Docker Compose, make sure you have Docker installed on your machine. Then, navigate to the project directory and run the following command:

```bash
docker-compose up
```

> [!NOTE]
> The server will be running on port 3000 by default

To stop the server and remove the containers, use the following command:

```bash
docker-compose up down
```

## API Documentation

You can access the OpenAPI documentation for the API at [http://localhost:3000/documentation](http://localhost:3000/documentation). This documentation provides detailed information about the available endpoints, request parameters, responses, and schemas.

## Endpoints

- `POST /todos`: Create a new todo.
- `GET /todos`: Retrieve all todos.
- `GET /todos/{id}`: Retrieve a todo by ID.
- `PUT /todos/{id}`: Update a todo by ID.
- `DELETE /todos/{id}`: Delete a todo by ID.

## Dependencies

- [Fastify](https://www.fastify.io/): Fast and low overhead web framework for Node.js.
- [oas-fastify](https://www.npmjs.com/package/oas-fastify): Fastify plugin for OpenAPI 3.0 documentation and validation.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests.

## License

[MIT License](LICENSE)
