# Simple REST API CI/CD (Node.js)

![CI/CD](https://github.com/<OWNER>/<REPO>/actions/workflows/ci-cd.yml/badge.svg)

## Endpoints
- `GET /` → `{ "message": "Hello from API" }`
- `GET /health` → `{ "status": "ok" }`
- `POST /echo` → `{ "you_sent": ... }`

## Local run
```bash
npm ci
npm test
npm start