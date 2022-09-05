const express = require('express')
const app = express()
const port = 80

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: ['index.html'],
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
}

app.use(express.static('public', options))


app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/time', (req, res) => {
    res.send(new Date().toString())
})



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})