function isSiape(siape) {
    return /^\d{7}$/.test(siape);
}

function isEmail(email) {
    let adress = email.split("@")[0];
    let size = /\.\./.test(email) ? 0 : adress.length;
    return size > 4 ? /^[a-z][a-z0-9\.]*@(gmail|hotmail|yahoo|ufca)\.(com|gov|edu)(\.br|)$/i.test(email) : false;
}

function isPhone(phone) {
    return  /^((\d{3}|\d{2}|\d{1})(\d{4}|\d{3}|\d{2}|\d{1})(\d{2}|\d{1})\d{6})$/.test(phone) ? true :
            /^([+]?\d{2}|)[\s]?(\d{2}|\(\d{2}\))[\s]?\d?[\s]?\d{4}[-]?\d{4}$/.test(phone);
}

function isName(name) {
    return name.length >= 3? /^[a-zA-zà-úÀ-Ú\s]*$/.test(name) : false;
}

function isAbbrev(abbrev) {
    return abbrev.length <= 10 ? /^([a-z0-9\.]*|[a-z0-9]*[-][a-z0-9]*|[a-zà-ú]*)$/i.test(abbrev) : false;
}

function validateFields({
    emailslist,
    nameslist ,
    phoneslist,
    abbrevslist,
    siapeslist
}) {
    let errors = [];
    let isValid;

    if(emailslist !== undefined) {
        if(Array.isArray(emailslist) === true) {
        emailslist.forEach(mail => {
                if(isEmail(mail) === false)
                errors.push(`Invalid email adress: ${mail}`);
            });
        }
        else isEmail(emailslist) === false ? errors.push(`Invalid email adress: ${emailslist}`) : errors = errors;
    }

    if(nameslist !== undefined) {
        if(Array.isArray(nameslist) === true) {
            nameslist.forEach(name => {
                if(isName(name) === false)
                    errors.push(`Invalid name: ${name}`);
            });
        }
        else isName(nameslist) === false ? errors.push(`Invalid name: ${nameslist}`) : errors = errors;
    }

    if(phoneslist !== undefined) {
        if(Array.isArray(phoneslist) === true) {
            phoneslist.forEach(phone => {
                if(isPhone(phone) === false)
                    errors.push(`Invalid phone number: ${phone}`);
            });
        }
        else isName(phoneslist) === false ? errors.push(`Invalid phone number: ${phoneslist}`) : errors = errors; 
    }

    if(abbrevslist !== undefined) {
        if(Array.isArray(abbrevslist) === true) {
            abbrevslist.forEach(abbrev => {
                if(isAbbrev(abbrev) === false)
                    errors.push(`Invalid abbreviation: ${abbrev}`);
            });
        }
        else isAbbrev(abbrevslist) === false? errors.push(`Invalid abbreviation: ${abbrevslist}`): errors = errors;
    }
   
    if(siapeslist !== undefined) {
        if(Array.isArray(abbrevslist) === true) {
            abbrevslist.forEach(abbrev => {
                if(isAbbrev(abbrev) === false)
                    errors.push(`Invalid abbreviation: ${abbrev}`);
            });
        }
        else isAbbrev(abbrevslist) === false? errors.push(`Invalid abbreviation: ${abbrevslist}`): errors = errors;
    }

    isValid = errors.length === 0;
    return {isValid, errors};
}

module.exports = {
    isSiape, isEmail, isName, isPhone, isAbbrev, validateFields
}
