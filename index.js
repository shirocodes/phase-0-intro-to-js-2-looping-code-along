
function writeCards(names, event) {
    let cardMessages = [];

    for (let i = 0; i < names.length; i++) {
        // debugger;
        let cardMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cardMessages.push(cardMessage);
    }
    return cardMessages;
}

const eventName = "surprise";
const names = ["Guadalupe", "Ollie", "Aki"];
writeCards(names, eventName);

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}


