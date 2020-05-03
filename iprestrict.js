var http = require('http');
http.createServer(function (req, res)
{
    var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    if (ip == '127.0.0.1') { // exit if it's a particular ip
        res.end();
        }
