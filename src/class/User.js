class User {
    constructor(data) {
        this._firstName = data.firstName
        this._lastName = data.lastName
        this._age = data.age
    }

    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    get age() {
        return this._age
    }
}

export default User
