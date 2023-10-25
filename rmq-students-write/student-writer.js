#!/usr/bin/env node
require("./models/db");
var amqp = require("amqplib/callback_api");
const StudentController = require("./controllers/StudentController");

amqp.connect("amqp://guest:guest@rabbitmq", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error, channel) {
    var queue = "students_queue";

    channel.assertQueue(queue, {
      durable: true,
    });
    channel.prefetch(1);
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);
    channel.consume(
      queue,
      function (msg) {
        var secs = msg.content.toString().split(".").length - 1;

        var operation = JSON.parse(msg.content.toString());
        var action = operation["action"];
        var student = operation["student"];
        var id = operation["id"];
        switch (action) {
          case "create":
            StudentController.create(id, student);
            break;
          case "edit":
            StudentController.edit(id, student);
            break;
          case "delete":
            StudentController.delete(id, student);
            break;
        }

        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function () {
          console.log(" [x] Done");
          channel.ack(msg);
        }, secs * 1000);
      },
      {
        noAck: false,
      }
    );
  });
});
