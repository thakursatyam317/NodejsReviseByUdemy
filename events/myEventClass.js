import EventEmitter from "events";

class ChatApp extends EventEmitter{

    sendMessage(msg){
        console.log(`the message is send : ${msg}`);
        this.emit('messageSend', msg)

       
    }
}


const chat = new ChatApp();

chat.on('messageSend', (msg)=>{
    console.log(`Message is recive : ${msg}`);
});

chat.sendMessage( "nothing do");