export const setStorage = (user) => {

    localStorage.setItem('userLogged', JSON.stringify(user))
}

export const getStorage = () => {

    const user = localStorage.getItem('userLogged')

    return user ? JSON.parse(user) : null
}

export const removeStorage = () => {
    localStorage.removeItem('userLogged')
}