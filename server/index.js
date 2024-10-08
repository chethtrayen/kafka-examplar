const { app } = require("./lib/app");
const socket = require("./lib/socket");

const main = async () => {
  const { Kafka } = require("kafkajs");

  const port = 3005;

  app.use("/", socket);

  app.listen(port, () => console.log(`Running on PORT::${port}`));
};

main();
