const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.0.119:9092"],
});
exports.kafka = kafka;
