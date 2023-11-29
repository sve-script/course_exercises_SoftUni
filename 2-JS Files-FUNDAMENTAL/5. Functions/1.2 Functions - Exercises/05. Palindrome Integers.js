function palindromeIntegers(numbs) {

    for (let currentValue of numbs) {
        let isTrue = checkIsPalindrome(currentValue)
        console.log(isTrue);
    }

    function checkIsPalindrome(numb) {

        let numbAsString = numb.toString()
        let mirrorNumber = "";

        for (let j = numbAsString.length - 1; j >= 0; j--) {

            mirrorNumber += numbAsString[j];
        }

        let isPalindrome = numb == mirrorNumber; // <-- return boolean
        return isPalindrome;

    }

}

palindromeIntegers([32, 2, 232, 1010])


//second solution

function palindrome(arr) {

    for (let num of arr) {
        let mirrorNumb = num.toString().split(``).reverse().join(``);
        // prevryshtame numb v string. posle go razdelqme i go pravim na masiv(sys split)
        // posle go obrystahme s reverse i nakraq obyrnatiq masiv go pravim pak na string s join

        console.log(mirrorNumb == num ? 'true' : 'false')
        //console.log(mirrorNumb == num)

    }


}
palindrome([32, 2, 232, 1010])

// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001.
// Write a function, which receives an array of positive integers and checks if each integer is a palindrome or not.
// Output
// •	If the current integer is a palindrome, print: "true"
// •	Otherwise, print: "false"
