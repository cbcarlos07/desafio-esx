
const realtime =  (io: any) =>{

    io.on( 'connection', (socket) =>{

        socket.on('chat', (message: any)=>{
            socket.emit('chat', message) 
         })        
    })

}

export default realtime