const apiUrl = "https://reqres.in/api/users"
//const proxyUrl = "https://cors-anywhere.herokuapp.com"
const userDisplayNode = document.getElementById('users')

const fetchUsers = async () => {
    let data = await (await fetch(apiUrl)).json()
    debugger
    return data
    //Is this a weakness in js? That transactions aren't atomic by default? 
}

document.addEventListener('DOMContentLoaded', () => {
    fetchUsers().then(response => {
        response.data.forEach(user => {
            let userDiv = document.createElement('div')
            let html = `<h2>${user.first_name}</h2>`
            userDiv.innerHTML = html
            userDisplayNode.appendChild(userDiv)
        })
    })
})