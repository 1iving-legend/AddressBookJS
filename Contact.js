 
import { validateName } from "./validators.js"; 

 
 
 export class Contact {
  constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {

    validateName(firstName);
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


try{
const person1= new Contact("vivek","bhaskar", "Ketat kala","Rehla","Jharkhand",822124,9304891411,"vivekkpaathak@gmail.com");
console.log(person1);
}
catch(error)
{
 console.error(error.message);
}
