const url = 'http://localhost:8001/api'

export function creatAccount(userData) {
    console.log(userData)
    return dispatch => {
        fetch(`${url}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
}