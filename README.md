# Keycloak Secured Node.js API Example

This repository contains a completed example of a Node.js Express API secured using Keycloak. This is the **TypeScript version** of the project, providing the same functionality as the JavaScript implementation while using TypeScript for static typing and a `src`/`dist` project structure.

The example demonstrates authentication using the OAuth 2.0 Client Credentials flow, where a client authenticates with Keycloak to obtain a JWT access token. The token is then used to access a protected API endpoint, while unauthorised requests are rejected with a `401 Unauthorized` response.

This project serves as a reference implementation, showcasing a fully functioning secured API using Node.js, TypeScript, Keycloak, Docker, and JWT authentication.
