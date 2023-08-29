const zlib = require('zlib')

const fs = require('fs')

let gzip = zlib.createGzip()

let r = fs.createReadStream('text.gz')
let w = fs.createWriteStream('newFile.txt')

r.pipe(gzip).pipe(w)

console.log(`new file created`)