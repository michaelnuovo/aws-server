var net = require('net');

var tcpServer = net.createServer(function(socket) {

        console.log('connection established...')

        socket.on('end',function(){
            console.log('server disconnected...')
        })

	socket.on('data',function(data){
            console.log('data received from the tcp client')
                console.log('data.length = '+data.length)
                for( i =0;i<data.length;i++){
                        console.log('data[] = '+data[i])
                        }
            socket.write('Server Reply: '+data)
        })
});

tcpServer.listen(3000, function(){
    console.log("Listenting on port : "+3000)
});