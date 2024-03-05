console.log('Its Working ');

//  Normal Function

function Tellme() {
    console.log('Name');
}
Tellme()

//  Name IIFE

    (function name1() {
        console.log('Name Please');
    })();

//  Normal IIFE

    (() => {
        console.log('Name Is Mentioned');
    })();

