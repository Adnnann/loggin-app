import fetchData from '../config/config'

const signin = () => {
    fetchData.get(`${baseUrl}/auth/signin`,{
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
    })
    .then(response=>response.data)
    .catch(err=>console.log(err))
}

const singout = () => {
    return fetch(`${baseUrl}/auth/signout`, {method:'GET'})
    .then(response=>response.json())
    .catch(err=>console.log(err))
}

export default {signin, singout}