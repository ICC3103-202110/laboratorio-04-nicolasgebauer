const prompt = require('prompt-sync')({
    history: require('prompt-sync-history')(), //open history file
    sigint: true
  });


const sum = counter => counter+1;
const subtraction = counter => counter-1;
const string_sum = msg => {
    return msg === '+';
}
const string_subtraction = msg => {
    return msg === '-';
}
const string_quit = msg => {
    return msg === 'q';
}


const view = counter =>{
    return `    Count: ${counter}\n\n    (+) (-)\n\n   (q) for quit\n`;
}

const update = (msg, counter) =>{
    if(string_sum(msg)){
        counter = sum(counter);

    }
    else if (string_subtraction(msg)){
        counter = subtraction(counter);
    }
    return counter;
}


function app(counter){
    
    const currentView = view(counter);
    console.clear();
    console.log(currentView);
    const msg = prompt('What would you do?');
    prompt.history.save();
    if(string_quit(msg)){}
    else{
        app(update(msg,counter));
    }

}

app(0);
