const http = require('http');

const phones = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Samsung_Galaxy_Note_7.png/248px-Samsung_Galaxy_Note_7.png',
        title: 'Samsung Galaxy Note 7',
        description: 'Samsung mobile, with Android',
        color: 'Black',
        price: 485,
        id: '1'
    },
    {
        image: 'https://purepng.com/public/uploads/large/purepng.com-iphone-xiphone-xapplescreen-21530617565atiut.png',
        title: 'iPhone X',
        description: 'New iPhone mobile, with iOs',
        color: 'black',
        price: 840,
        id: '2'
    }
]

const server = http.createServer((req, res) => {
    const url = req.url
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*')
    if (url === '/phones') {
        res.statusCode = 200;
        res.end(JSON.stringify(phones))
    }
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({}))
    }

});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})