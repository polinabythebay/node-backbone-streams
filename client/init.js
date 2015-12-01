$(function() {

//kick off backbone application here
  var messages = new Messages();
  messages.loadMsgs();
  var formView = new FormView({el: $('#main'), collection: messages})
  var messagesView = new MessagesView({el: $('#chats'), collection: messages});
  setInterval( messages.loadMsgs.bind(messages), 1000 );
}
