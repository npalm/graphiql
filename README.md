# GraphiQL webclient

A simple GraphiQL webclient based on graphiql experss to connect to a public GraphQL API endpoint.

Usages
```
docker build -t graphiql .
docker run --name graphiql -p 4000:4000 -e API_URL=<URL> graphiql
```

Or directly via the image on docker hub.
```
docker run --name graphiql -p 4000:4000 -e API_URL=<URL> npalm/graphiql
```
