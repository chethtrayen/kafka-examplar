# Kafka Examplar

Base example for running a kafka server, express websocket, and react client

## How to run:

### Run Kafka docker container

- Run docker container

```sh
docker compose up -d
```

- Open producer console

```sh
docker exec -it kafka /usr/bin/kafka-console-producer --topic test-topic --bootstrap-server localhost:9092
```

### Run server

- Navigate into the `/server` folder
- Run `pnpm start`

### Run client

- Navigate into the `/client` folder
- Run `pnpm start`

### Emit message

- In the producer console, write any message

### Check message

- In the client browser log, check if message was sent
