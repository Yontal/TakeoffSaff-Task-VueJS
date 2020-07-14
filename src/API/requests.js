import { Contacts, Users } from './dummydata'

export const loadContacts = () => {
    return Contacts;
}

export const login = (credentials) => {
    let existUser = Users.filter(user => (user.username === credentials.username && user.password === credentials.password));
    if(existUser.length > 0){
            return 1;
        } else {
            return -1;
        }
}

export const logout = () => {
    return null;
}