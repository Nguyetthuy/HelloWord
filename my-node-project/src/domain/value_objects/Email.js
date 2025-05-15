// src/domain/value_objects/Email.js

class Email {
    constructor(email) {
      this.email = email;
      if (!this.isValid()) {
        throw new Error("Invalid email address");
      }
    }
  
    isValid() {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return regex.test(this.email);
    }
  }
  
  module.exports = Email;
  