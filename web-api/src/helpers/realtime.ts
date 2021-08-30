
const realtime =  (io: any) =>{

    io.on( 'connection', (socket) =>{

        socket.on('chat', (message: any)=>{
            socket.emit('chat', message) 
         })
         
        socket.on('sala', (message: any)=>{
            socket.emit('sala', message) 
         })        
    })

}

export default realtime