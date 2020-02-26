const fs= require('fs')

const readfile=fs.readFileSync('data.json')
const readparse=JSON.parse(readfile)
const readstring=JSON.stringify(readparse)
console.log(readstring)

readparse.name="sudhan"
readparse.age=20

const parsemain= JSON.stringify(readparse)

fs.writeFileSync('data.json',parsemain)