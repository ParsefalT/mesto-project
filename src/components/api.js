const config = {
    upadate: {
        authorization: 'c284f9ca-c197-44c5-b67f-9e09686139bb',
        'Content-type': 'application/json'
    }
}

function setProfileDate(name, about, method) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-24/users/me', {
        method: method,
        headers: config.upadate,
        body: JSON.stringify({
            name: name,
            about: about
            }),
        })
        .then((result) => chek(result))
        .then((res) => console.log(res))
};

function chek(res) {
    if(res.ok) {
        console.log(res);
        return res.json();
    }
    return `Ошибка ${res.status}`
}

export {setProfileDate}