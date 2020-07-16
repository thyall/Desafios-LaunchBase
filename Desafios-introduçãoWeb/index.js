const class1 = [
    {
        name: 'Thyall',
        grade: 9.8
    },

    {
        name: "Lucas",
        grade: 10
    },

    {
        name: 'Bozo',
        grade: 2
    },

    {
        name: "mais1",
        grade: 10
    }
]

const class2 = [
    {
        name: 'Artur',
        grade: 10
    },

    {
        name: "Dudu",
        grade: 1
    },

    {
        name: 'Lucas',
        grade: 2
    }
]
function average(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const resultado = sum / students.length

    return resultado
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`A average da turma ${turma} foi de ${average}. Parabéns`)
    }

    else {
        console.log(`${turma} Lixos`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedflunked(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedflunked(student)
    }
}

const average1 = average(class1)
const average2 = average(class2)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(class1)
studentsflunkeds(class2)