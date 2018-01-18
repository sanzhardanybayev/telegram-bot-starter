const bot = require('./src/TelegramBot');



bot.onText(/\/start$/, (msg, match) => {


  let text = "Welcome to automated world! 🎉 \n" +
    "What can I do for you ? ";

  let opts = {

    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Create Inline Button',
            callback_data: 'create_button'
          }
        ],
        [
          {
            text: 'One to one promotion',
            callback_data: 'one_to_one_promotion'
          }
        ],
        [
          {
            text: 'Common link promotion',
            callback_data: 'common_link_promotion'
          }
        ]
      ]
    }
  };

  bot.sendMessage(msg.from.id, text, opts);


});
