const express = require('express')
const app = express()
const morgan = require('morgan')


// function logger(req, res, next) {
//     console.log(`Route Recived ${req.protocol}://${req.get('host')}${req.originalUrl}`)
//     // console.log(req)
//     next()
// }



app.use(morgan('dev'))
app.use(express.json())
app.set('view engine', 'ejs')
// app.use(logger)

// app.all('/get', (req, res, next) => {
//     console.log('por aqui paso')
//     next()
// })

// app.get('/', (req, res) => {
    // res.send('Listo')
// })



// settings
app.set('appName', 'Fast express tutorial')





// Routes
app.get('/',(req, res)=>{
	const data = [{name: 'john'}, {name: 'javier'}, {name: 'Manuel'}, {name: 'Dinamicos'}]
	res.render('index.ejs', {people: data})

})


app.get('/get', (req, res) => {
	console.log(app.get('appName'))
    res.json({
        name: "javier",
        lastname: "valles"
    })
})

app.post('/post/:id', (req, res) => {
    console.log(req.params)
    res.send('Peticion POST')
})

app.put('/put/:id', (req, res) => {
    const { usename, name } = req.body
    console.log(req.body)
    res.send(`Se actualizo el usuario ${usename} con el nombre ${name}`)
})

app.delete('/delete/:id', (req, res) => {
    res.send(`usuario ${req.params.id} eliminado`)
    res.send('Peticion DELETE')
})


app.use(express.static('public'));



app.listen(3000), () => {
	console.log(app.get('appName'))
    console.log('server an port 3000')
}