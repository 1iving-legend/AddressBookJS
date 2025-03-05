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

    findContact(name){

        let found=false;

         this.contacts.forEach((contact)=>{
            if(contact.firstName===name)
            {
                found=true;
            }
         })
         return `${name} is present ? ${found}`;

    }


    UpdateContact(phone, key,value){
         this.contacts.forEach((contact)=>{
            if(contact.phoneNumber===phone)
            {
                contact[key]=value;   
            }
         })
         console.log(`${key} updated sucessfullay !`)

    }

    //UC5

    DeleteContent(Name)
    {
      this.contacts= this.contacts.filter(contact=>contact.firstName!=Name);
         console.log(" Deleted sucessfullay ")

    }
    

}