const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "app",
  brokers: ["localhost:29092"],
});

module.exports = kafka;
