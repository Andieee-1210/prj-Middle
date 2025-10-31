require('dotenv').config();

module.exports = {
    mongoURI: process.env.MONGODB_ORDER_URI || 'mongodb://localhost/orders',
    rabbitMQURI: 'amqp://rabbitmq:5672',
    rabbitMQQueue: 'orders',
    port: 3002
};
  