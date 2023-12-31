const { kafka } = require("./kafka");

async function init() {
  let producer;
  try {
    console.log("Kaffa producer Connecting.......");
    producer = kafka.producer();
    await producer.connect();
    console.log("Kaffa producer Connected");
    console.log("Sending Message......");
    await producer.send({
        topic: 'rider-updates1',
        messages: [
            { key: 'key1', value: 'hello world' },
            { key: 'key2', value: 'hey hey!' }
        ],
    })
    console.log("Message Sent");
  } catch (error) {
    console.log(`error :::${error}`);
  } finally {
    await producer.disconnect();
  }
}
init();