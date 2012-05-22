var  HTTPStatus = require('http-status')
, image_storage = require('../lib/image_storage')
;

function sendFile(res, data, mime, code) {
    res.send(data, { 'Content-Type': mime }, code);
}

exports.serveFile = function(req, res, next) {
    var filename = req.params.id;
    image_storage.readGsFile(filename, function(error, gsData) {
        sendFile(res, gsData.binary, gsData.gsObject.contentType, HTTPStatus.OK);
    });
};