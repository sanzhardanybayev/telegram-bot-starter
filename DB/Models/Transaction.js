const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const host = 'yourHost';
mongoose.connect(`mongodb://:@${host}:27017/databaseName`);

const Transaction = mongoose.model('Transaction', new Schema({
  initiatorId: String,
  status: String,
  buttons: [],
  photo: [],
  uuid: String,
  text: String,
  date: { type: Date, default: Date.now },
}), 'transactions');

module.exports = Transaction;
