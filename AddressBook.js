import { Contact } from "./Contact.js";

export class AddressBook{

    constructor()
    {
        this.contacts=[];
    }

    //updated this method UC7
    addContact(contact) {
        let existingContacts = this.contacts.filter(c => 
            c.firstName === contact.firstName && c.lastName === contact.lastName
        );
    
        if (existingContacts.length > 0) {
            console.log(`Error: Contact with name ${contact.firstName} ${contact.lastName} already exists!`);
        } else {
            this.contacts.push(contact);
            console.log(`Contact ${contact.firstName} ${contact.lastName} added successfully!`);
        }
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

    //UC6

    countContacts()
    {
        let count= this.contacts.length;
        return `size of address book is ${count}`;

    }


    //UC8

    searchByState(state){
        let data = this.contacts.filter(c => c.state === state);

        if (data.length === 0) {
            console.log(`No contacts found in state: ${state}`);
            return [];
        }
    
        return data;
    }


    //UC9

    search(state, name){
        let data = this.contacts.filter(

            (contact)=>(contact.state===state) && (contact.firstName===name) ||null

        );

        if (data.length === 0) {
            console.log(`No contacts found in state: ${state}`);
            return [];
        }
    
        return data;
    }



    //UC10

    countBYArea(value)
    {
        let count=0;
        this.contacts.forEach(contact=>{
            if(contact.state===value || contact.city===value)
            {
                count++;
            }
        })
        return count;
    }

    //UC11
    SortByName()
    {
       this.contacts.sort((ab,ba)=>(ab.firstName>ba.firstName)?1:((ba.firstName>ab.firstName)?-1:0)) ;
    }


    //UC12
    SortByvalue(value)
    {
        console.log(`sort by ${value}`);
       this.contacts.sort((ab,ba)=>(ab[value]>ba[value])?1:((ba[value]>ab[value])?-1:0)) ;
    }

}