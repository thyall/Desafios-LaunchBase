const fs = require('fs')
const data = require('./data.json')
const { age, date, graduation } = require('./utils')

//create
exports.post =  function(req, res) {
    const keys = Object.keys(req.body)

    for(key of keys){
        if(req.body[key] == "")
            return res.send("Please, fill all fields")
    }

    let {avatar_url, name, birth, select, aula, services} = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teacher.length + 1)

    data.teacher.push({
        id,
        name,
        avatar_url,
        birth,
        select,
        aula,
        services,
        created_at
    })

    fs.writeFile ("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error")

        return res.redirect("/teachers")
    })

    
}

//show
exports.show = function(req, res) {
    const { id } = req.params

    const foundTeacher = data.teacher.find(function(teacher){
        return teacher.id == id
    })

    if(!foundTeacher) return res.send("Teacher Not Found!!!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        services: foundTeacher.services.split(','),
        select: graduation(foundTeacher.select),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at),
    }

    return res.render("teachers/show", {teacher})
}

//edit
exports.edit = function(req, res) {

    const { id } = req.params

    const foundTeacher = data.teacher.find(function(teacher) {
        return teacher.id == id
    })

    if(!foundTeacher) return res.send('teacher Not Found')

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render("teachers/edit", {teacher})
}

//put
exports.put = function(req, res) {    
    const { id } = req.body
    let index = 0

    const foundTeacher = data.teacher.find(function(teacher, foundIndex) {
       if(id == teacher.id) {
           index = foundIndex
           return true
       }
    })

    if(!foundTeacher) return res.send('Teacher Not Found')

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth)
    }

    data.teacher[index] = teacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write Error!!!")

        return res.redirect(`/teachers/${id}`)
    })
}

//delete
exports.delete = function(req, res) {
    const { id } = req.body

    const filteredTeacher = data.teacher.filter(function(teacher){
        return teacher.id != id
    })

    data.teacher = filteredTeacher

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write Error!!!")

        return res.redirect('/teachers')
    })
}