# AngularDockerNginx

An Angular 22 app, built in Docker and served by NGINX.

## Docker

The `Dockerfile` has two stages:

1. `node:24-alpine` (current Node LTS) installs the dependencies with `npm ci` and builds the app.
2. `nginx:1.30-alpine` (current stable NGINX) serves `dist/angular-docker-nginx/browser`.

`nginx.conf` sends unknown paths to `index.html`, so deep links work with the Angular router.

```bash
docker build -t angular-docker-nginx .
docker run --rm -p 8080:80 angular-docker-nginx
```

Then open `http://localhost:8080/`.

## Development server

Run `npm start` and open `http://localhost:4200/`.

## Build

Run `npm run build`. The output goes to `dist/angular-docker-nginx/browser`.

## Tests

Run `npm test` to run the unit tests with [Vitest](https://vitest.dev).

## Lint

Run `npm run lint` to lint with [angular-eslint](https://github.com/angular-eslint/angular-eslint).
