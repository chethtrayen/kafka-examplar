const kafka = require("./kafka-client");

const createConsumer = async (handler) => {
  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  console.log("Connected to kafka server...");

  await consumer.subscribe({ topic: "test-topic" });
  console.log("Consumer is subscribed...");

  await consumer.run({
    eachMessage: handler,
  });
};

module.exports = { createConsumer };
