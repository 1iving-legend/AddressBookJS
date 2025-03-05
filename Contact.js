 
import { validateName, validateAddress,validateZip,validatePhone,validateEmail } from "./validators.js"; 

 
 
 export class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {

    validateName(firstName);
    validateAddress(address);
    validateZip(zip);
    validatePhone(phoneNumber) ;
    validateEmail(email);
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phoneNumber = phoneNumber;
      this.email = email;
  }
}
