module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 ||
             month == 0 &&
             today.getDate < birthDate.getDate()){
            age = age - 1
        }

        return age
    },

    date: function(timestamp) {
        const date = new Date(timestamp)

        // yyyy
        const year = date.getUTCFullYear()

        // mm
        const month = `0${date.getUTCMonth() + 1}`.slice(-2) // [0,11]

        // dd
        const day = `0${ date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    },

    graduation: function(nivel) {
        if (nivel == "valor1") return "Ensino medio"
        else if (nivel == "valor2") return "Ensino Superior"
        else return "Mestrado ou Doutorado"
    }
}