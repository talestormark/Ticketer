# Backend

Denne backenden er bygget på Postgres, Prisma og Express.

## Hvordan starte den

1. Installer alle modulene hvis ikke allerede installert
```
yarn install 
```
2. Start databasen
```
docker-compose up -d
```
3. start serveren
```
yarn run dev
```

## Linting og prettier

Linting
```
yarn run lint
``` 

Prettier
```
yarn run prettier
```

## Hvordan teste den

kjør dette
```
yarn run test
```