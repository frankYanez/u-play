export const setStorage = (user) => {

    localStorage.setItem('userLogged', JSON.stringify(user))
}

export const getStorage = () => {

    const user = localStorage.getItem('userLogged')

    return JSON.parse(user)
}

export const removeStorage = () => {
    localStorage.removeItem('userLogged')
}