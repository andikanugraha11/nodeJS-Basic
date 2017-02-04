var Events = require('events');
var eventEmitter = new Events.EventEmitter();

function bunyikanBel(){
	console.log("Ring Ring");
}

eventEmitter.on('tekanBel',bunyikanBel);
eventEmitter.on('pintuDibuka', function(pesan){
	console.log(pesan);
})
//event dilakukan
eventEmitter.emit('tekanBel');

eventEmitter.emit('pintuDibuka','Hello Silahkan masuk');