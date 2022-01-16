
const Model = require('./model');
// mongodb+srv://pieroAdmin:0Q7JiQ3Gy192yQvyUuMtXOziEXx@cluster0.0a4oh.mongodb.net/telegrom?retryWrites=true&w=majority

 
function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser){
  let filter = {};
  if(filterUser !== null){
    filter = {user: filterUser};
  }
  const messages = await Model.find(filter);
  return messages;
}
async function updateText(id,message){
  const foundMessage = await Model.findOne({
    _id:id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id){
  return Model.deleteOne({
    _id:id
  });
}

module.exports = {
  add : addMessage,
  list : getMessage,
  updateText,
  remove : removeMessage
}