
import { Contact } from './Contact.js';
import { AddressBook } from './AddressBook.js';


const myAddressBook = new AddressBook();
try {


    
    const person1 = new Contact("Vivek", "Bhaskar", "Ketat Kala", "Rehla", "Jharkhand", "822124", "7304891411", "vivekkpaathak@gmail.com");
    const person2 = new Contact("Amit", "Sharma", "Delhi", "New Delhi", "Delhi", "110001", "9876543210", "amitsharma@example.com");

   
    myAddressBook.addContact(person1);
    myAddressBook.addContact(person2);

    myAddressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}
