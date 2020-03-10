class Auth {
  constructor() {
    this.authenticated = false;
    this.id = null;
  }

  login(id, cb) {
    this.authenticated = true;
    this.id = id;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  signin(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }

  getId() {
    return this.id;
  }
}

export default new Auth();
