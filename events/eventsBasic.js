import EventsEmmiter from 'events';


const eventEmmiter = new EventsEmmiter();

//create the on event
eventEmmiter.on('greet', (userName)=>{
    console.log('Hi, I am a eventEmmiter in Nodejs', userName);
    
})

eventEmmiter.on('greet1', (userName)=>{
    console.log('Hi, I am a eventEmmiter in Nodejs', userName);
    
})

eventEmmiter.once("orderPlaced", (userName)=>{
    console.log(`The Order is Placed, The UserName is ${userName}`);
    
})




//call this on
eventEmmiter.emit('greet', "Satyam");//


eventEmmiter.emit('greet1', "Satyam12");//

eventEmmiter.emit('greet', "Satyam");//

eventEmmiter.emit("orderPlaced", "Satyam");