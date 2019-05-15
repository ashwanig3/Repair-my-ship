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

export function userLogin(credential, cb) {
    return dispatch => {
        fetch(`${url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credential)
        })
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'LOGIN_SUCCESS', data: data.user});
            cb(true, data.user)
        })
    }
}

export function postIssue(issue) {
    return dispatch => {
        fetch(`${url}/:userId/issue`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issue)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
}