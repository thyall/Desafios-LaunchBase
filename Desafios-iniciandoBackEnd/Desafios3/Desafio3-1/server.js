const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cursos = require("./dataDesafio")

server.set("view engine","njk")

server.use(express.static('public')) 

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        logo: "assets/logo.jpg",
        titulo: "Rocketseat"
    }

    return res.render("about", {about})
})

server.get("/courses", function(req, res) {
    return res.render("courses", {items: cursos})
})

server.get("/course/:id", function(req, res) {
    const id = req.params.id;

    const curso = cursos.find(function(curso){
        if(curso.id == id){
            return true
        }
    })

    if(!curso){
        return res.send('NOT FOUND')
    }

    return res.render("course", { item: curso })
  });

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log('Server is Running!!')
})