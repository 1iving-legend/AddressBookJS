
import { Contact } from './Contact.js';
import { AddressBook } from './AddressBook.js';


const myAddressBook = new AddressBook();
try {


    
    const person1 = new Contact("Vivek", "Bhaskar", "Ketat Kala", "Rehla", "Jharkhand", "822124", "9304891411", "vivekkpaathak@gmail.com");
    const person2 = new Contact("Amit", "Sharma", "Delhi", "New Delhi", "Delhi", "110001", "9876543210", "amitsharma@example.com");
    const person3 = new Contact("Shivraj", "Solanki", "Indore", "Indore", "Madhya Pradesh", "452001", "9876543211", "shivraj.solanki@example.com");
    const person4 = new Contact("Sujal", "Upadhyay", "Varanasi", "Varanasi", "Uttar Pradesh", "221001", "9876543212", "sujal.upadhyay@example.com");
     const person5 = new Contact("Bhavya", "Datttey", "Pune", "Pune", "Maharashtra", "411001", "9876543213", "bhavya.datttey@example.com");
     const person6 = new Contact("Riya", "Yadav", "Lucknow", "Lucknow", "Uttar Pradesh", "226001", "9876543214", "riya.yadav@example.com");
     const person7 = new Contact("Tarun", "Dubey", "Jaipur", "Jaipur", "Rajasthan", "302001", "9876543215", "tarun.dubey@example.com");

   
    myAddressBook.addContact(person1);
    myAddressBook.addContact(person2);
    myAddressBook.addContact(person3);
    myAddressBook.addContact(person4);
    myAddressBook.addContact(person5);
    myAddressBook.addContact(person6);
    myAddressBook.addContact(person7);


    myAddressBook.displayContacts();
} catch (error) {
    console.error(error.message);
}

console.log(myAddressBook.findContact("vivek"));

myAddressBook.UpdateContact("9304891411","lastName","Pathak");

myAddressBook.displayContacts();
console.log(myAddressBook.countContacts());

myAddressBook.DeleteContent("Bhavya");
myAddressBook.displayContacts();
console.log(myAddressBook.countContacts());
console.log();
console.log("UC8");
console.log();
console.log([...myAddressBook.searchByState("Uttar Pradesh")]);

console.log([...myAddressBook.search("Uttar Pradesh","Riya")]);
console.log(myAddressBook.countBYArea("Rehla"));
console.log(myAddressBook.countBYArea("Uttar Pradesh"));