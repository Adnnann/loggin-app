import baseUrl from '../config/config'

const create = user => {
    return fetch(`${baseUrl}/api/users/`, {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response=> response.json())
    .catch(err=>console.log(err))
}

const list = () => {
    return fetch(`${baseUrl}/api/users`, {method: 'GET'})
    .then(response => response.json())
    .catch(err=>console.log(err))
}

const read = (params, token) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: 'GET',
        headers:{
            Authorization: `Bearer ${token.t}`,
            'Accept':'application/json',
            'Content-Type':'application/json',
            
        }
    })
    .then(response => response.json())
    .catch(err=>console.log(err))
}

const update = (params, token, user) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: 'PUT',
        headers:{
            Authorization: `Bearer ${token.t}`,
            'Accept':'application/json',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json(user))
    .catch(err=>console.log(err))
}

const remove = (params, token) => {
    return fetch(`${baseUrl}/api/users/${params.userId}`, {
        method: 'DELETE',
        headers:{
            Authorization: `Bearer ${token.t}`,
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
    })
    .then(response => response.json())
    .catch(err=>console.log(err))
}


export {create, list, read, update, remove}