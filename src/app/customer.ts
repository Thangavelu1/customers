export class Customer {
    constructor(
        private _cid: number,
        private _firstName: string,
        private _lastName: string,
        private _location: string,
        private _email: string
    ) {}
    get cid() {
        return this._cid;
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get location() {
        return this._location;
    }
    get email() {
        return this._email;
    }
}
