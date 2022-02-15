const  http = require('http')

const server = http.createServer((req, res)=> {
	res.status = 200;
	res.setHeader('Content-Type','text/plain' )
	res.end('hellow world')
})


server.listen(3000, ()=>{
	console.log('escuchando en el puerto 3000')
})