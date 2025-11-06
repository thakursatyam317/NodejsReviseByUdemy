import EventEmitter from "events";

const eventEmitter = new EventEmitter();


eventEmitter.on('error', (msg)=>{
    console.error("error comes : ",msg.message);
});

eventEmitter.emit('error', new Error("Some thing went wrong"));