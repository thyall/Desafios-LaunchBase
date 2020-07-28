const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/", function(req, res) {

    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/29062173?s=460&u=eb568d24153e4804195322bcc765de1236752c42&v=4",
        name: "Thyall D'greville",
        role: "Estudante de TI",
        description: 'Estudante de programação e atualmente realizando o curso de LaunchBase da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "GitHub", url: "https://github.com/thyall"},
            { name: "Twitter", url: "https://twitter.com/Thyall1/"},
            { name: "LinkedIn", url: "https://www.linkedin.com/in/thyall-dgreville-651889195/"}
        ]
    }
    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function() {
    console.log('Server is running')
})