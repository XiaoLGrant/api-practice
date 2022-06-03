const { request } = require('express');
const express = require('express')
const app = express() //amakes it easy to invoke methods that come with express

//10 API info. This is just an object
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}
//2to make sure server is working before continuing, serve up a file
app.get('/'/*4main route*/, (request, response) => { // 3this is like an event listener, but instead of a click it's a network request. When it hears request, it fires a function.
    response.sendFile(__dirname + '/index.html'); //5server doesn't know where to find the file --> we have to tell it where to look --> use __dirname to tell server where to start looking
})

//9make server able to respond to an API request. This will respond with an object. 10Test if this is running using postman
/*app.get('/api', (request, response) => {
    response.json(rappers)
})*/

//11 use query params so users can search for rappers and get specific data back
app.get('/api/:name', (request, response) => {
    /*request.params.name*/ //if there is any text after the /, this line of code will grab it
    //console.log(request.params.name )

    const rapperName = request.params.name.toLowerCase() //sets line 35 to a variable, because this will never change. Add toLowerCase() to account for differences in what gets searched.
    if(rappers[rapperName] /*if rapperName is a property of rappers*/) {
        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
    
})

//6Server needs to be set up to listen
const PORT = 8000
app.listen(PORT/*7tells server where to listen*/, ()=> { /*8tell server what to do*/
    console.log(`The server is now running on port ${PORT}.`)
})