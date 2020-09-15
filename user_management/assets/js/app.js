const apiUrl = "https://reqres.in/api/users"
//const proxyUrl = "https://cors-anywhere.herokuapp.com"
const userDisplayNode = document.getElementById('users')

const fetchUsers = async (page) => {
    let data = await (await fetch(apiUrl + `?page=${page}&per_page=3`)).json()
    return data
    //Is this a weakness in js? That transactions aren't atomic by default? 
}

const fetchPage = page => {
    fetchUsers(page).then(response => {
        userDisplayNode.innerHTML = ''  //Haha - comment away ^^
        displayUsers(response)
        displayNavigation(response)
    })
}

const displayNavigation = response => {
    let { page, total_pages } = response   // "destructor"
    let buttonDisplay = document.createElement('div')
    let prevLink = page > total_pages/total_pages ? `<button onclick="fetchPage(${page - 1})"><<</button>` : ""
    let nextLink = page < total_pages ? `<button onclick="fetchPage(${page + 1})">>></button>` : ""
    buttonDisplay.innerHTML = prevLink + nextLink
    userDisplayNode.appendChild(buttonDisplay)  
}

const displayUsers = (response) => {
        response.data.forEach(user => {
            let userDiv = document.createElement('div')
            userDiv.classList.add('grid-item')
            let html = `<h2>${user.first_name}</h2>`
            html += `<img src="${user.avatar}" />`
            html += `<p><a href="mailto:">${user.email}</a></p>`
            userDiv.innerHTML = html
            userDisplayNode.appendChild(userDiv)
    })
}


document.addEventListener('DOMContentLoaded', () => {
    userDisplayNode.classList.add('grid-container')
    fetchPage()
})