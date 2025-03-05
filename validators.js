
export function validateName(name) {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
    if (!nameRegex.test(name)) {
        throw new Error(`Invalid Name: "${name}". Name must start with a capital letter and have at least 3 characters.`);
    }
}

export function validateAddress(address) {
    if (address.length < 4) {
        throw new Error(`Invalid Address: "${address}". Address must have at least 4 characters.`);
    }
}

export function validateZip(zip) {
    const zipRegex = /^[1-9][0-9]{5}$/; // Example: 6-digit valid zip
    if (!zipRegex.test(zip)) {
        throw new Error(`Invalid Zip Code: "${zip}". Must be a 6-digit number.`);
    }
}

export function validatePhone(phone) {
    const phoneRegex = /^[6-9][0-9]{9}$/; // 10-digit phone number starting with 6-9
    if (!phoneRegex.test(phone)) {
        throw new Error(`Invalid Phone Number: "${phone}". Must be a valid 10-digit number.`);
    }
}

export function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        throw new Error(`Invalid Email: "${email}". Must be a valid email format.`);
    }
}
