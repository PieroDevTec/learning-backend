const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller');

router.get('/',function(req,res){
  const filterMessages = req.query.user || null;
  controller.getMessages(filterMessages)
    .then((messageList) => {
      response.success(req,res,messageList,200);
    })
    .catch((error) => {
      response.error(req,res,'Unexpected Error',500,error);
    })
});

router.post('/',function(req,res){
  controller.addMessage(req.body.user,req.body.message)
    .then((fullMessage)=>{
      response.success(req,res,fullMessage,201);
    })
    .catch(()=>{
      response.error(req,res,'Error Ocurred',500,'Información Inválida');
    });
});
router.patch('/:id',function(req,res){
  controller.updateMessage(req.params.id,req.body.message)
    .then((data) => {
      response.success(req,res,data,200);
    })
    .catch((error) => {
      response.error(req,res,'Internal Error',500,error);
    })
});
router.delete('/:id',function(req,res){
  controller.deleteMessage(req.params.id)
    .then(() => {
      response.success(req,res,`User delete `,200);
    })
    .catch((error)=> {
      response.error(req,res,'Internal Error',500,error);
    })
});

module.exports = router;

