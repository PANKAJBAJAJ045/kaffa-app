const { kafka } = require("./kafka");

async function init() {
  let admin;
  try {
    console.log("Kaffa Connecting.......");
    admin = kafka.admin();
    await admin.connect();
    console.log("Kaffa Connected");
    console.log("Creating Topic......");
    await admin.createTopics({
      topics: [
        {
          topic: "rider-updates1",
          numPartitions: 2,
        },
      ],
    });
    console.log("Topic Created");
  } catch (error) {
    console.log(`error :::${error}`);
  } finally {
    await admin.disconnect();
  }
}
init();
