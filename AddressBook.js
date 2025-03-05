import { Contact } from "./Contact.js";

export class AddressBook{

    constructor()
    {
        this.contacts=[];
    }

    addContact(contact) {
        
        this.contacts.push(contact);
        console.log("Contact added successfully!");
    }

    displayContacts() {
        console.log("Address Book Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ${contact.firstName} ${contact.lastName} - ${contact.phoneNumber}`);
        });
    }

}