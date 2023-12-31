const { kafka } = require("./kafka");

async function init() {
  let consumer;
  try {
    console.log("Kaffa consumer Connecting.......");
    consumer = kafka.consumer({ groupId: "user-1" });
    await consumer.connect();
    console.log("Kaffa consumer Connected");
    console.log("Reading Message......");
    await consumer.subscribe({
      topics: ["rider-updates1"],
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log(
          ` [topic:${topic}],  [key:${message.key.toString()}],  [value:${message.value.toString()}]`
        );
      },
    });
    console.log("Message Read");
  } catch (error) {
    console.log(`error :::${error}`);
  } 
}
init();
