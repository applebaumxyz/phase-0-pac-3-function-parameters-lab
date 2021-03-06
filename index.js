/*
function myExample(){
    console.log()
}
*/  

function introduction(name) {
    //console.log(`Hi, ${name}, how are you doing today! :)`)
    return (`Hi, my name is ${name}.`)
}


/*
function myExample() {
    console.log()
}
*/

function introductionWithLanguage(name, language) {
    //console.log(`Hi ${name}, you're finally learning how to use ${language} ;)`)
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

introductionWithLanguage("Josh", "Ember.js")

/*
function myExample() {
    console.log()
    return 
}
*/

function introductionWithLanguageOptional(name, language= "JavaScript") {
    console.log()
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}


