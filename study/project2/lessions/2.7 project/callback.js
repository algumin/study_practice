function first(){
    //что-то делаем
    setTimeout (function()){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function laernJS(lang, callback){
    console.log("Я учу " + lang);
    callback();
    }

    laernJS()