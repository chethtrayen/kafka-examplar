const { app } = require("./app");
const { Router } = require("express");
const expressWs = require("express-ws");
const { createConsumer } = require("./kafka-consumer");

expressWs(app);

const router = Router();

router.ws("/", async (ws, req) => {
  const sendMessage = ({ message }) => {
    console.log(message.value.toString());
    ws.send(message.value.toString());
  };
  await createConsumer(sendMessage);
});

module.exports = router;
