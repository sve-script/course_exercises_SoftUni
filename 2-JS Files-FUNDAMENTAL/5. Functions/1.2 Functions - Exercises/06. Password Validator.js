function passwordValidator(password) {


    function check(check) {

        let a = passwordLength(check);
        let b = onlyLettersAndDigits(check);
        let c = passwordMustHaveTwoDigits(check);

        if (a && b && c) {
            console.log(`Password is valid`);
        }
    }
    check(password)


    function passwordLength(length) {
        if (lengthCheck = length.length >= 6 && length.length <= 10) {
            return lengthCheck
        } else {
            console.log(`Password must be between 6 and 10 characters`);
        }

    }

    function onlyLettersAndDigits(lettersAndDigits) {

        for (let char of lettersAndDigits) {

            if (!(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ||
                char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ||
                char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 58)) {

                console.log(`Password must consist only of letters and digits`);
                return false
            }


        }

        return true;
    }

    function passwordMustHaveTwoDigits(twoDigits) {

        let arrayOfString = twoDigits.split(``);
        let digitNumbersChecker = 0;
        for (let i = 0; i < arrayOfString.length; i++) {

            if (!isNaN(arrayOfString[i])) {
                digitNumbersChecker++
            }
        }

        if (digitNumbersChecker >= 2) {
            return true;
        } else {
            console.log(`Password must have at least 2 digits`);
        }

    }
}

passwordValidator('5!')