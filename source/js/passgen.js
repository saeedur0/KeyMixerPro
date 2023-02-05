const getRandomInt = n => {
    // Use crypto library if supported
    if('crypto' in  window){
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % n;
    }

    // Otherwise use Math.random
	return Math.floor(Math.random() * n);
}

// Generate password given a charset and length
const generatePass = (charset, length) => {
    let _password = '';
    
    for(let i = 0; i < length; i++){
        _password += charset[getRandomInt(charset.length)];
    }

    return _password;
}

export default generatePass;