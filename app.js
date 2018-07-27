const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000);

var data = [
    {
        "ID":1,
        "First Name":"Alice",
        "Last Name":"Zephyr",
        "Home Town":"Seattle"
    },
    {
        "ID":2,
        "First Name":"Bob",
        "Last Name":"Yellow",
        "Home Town":"Vancouver"
    },
    {
        "ID":3,
        "First Name":"Claire",
        "Last Name":"Xylitol",
        "Home Town":"Toledo"
    },
    {
        "ID":4,
        "First Name":"Daniel",
        "Last Name":"Winston",
        "Home Town":"Akron"
    },
    {
        "ID":5,
        "First Name":"Edina",
        "Last Name":"Veritas",
        "Home Town":"Wichita"
    }
];

function findByID(id){
    return data.filter( s => s["ID"] == id)[0];
}

app.use(cors());

app.get("/", (request,response) => {
    response.json( 
        {data: data });
});

app.get("/:id", (request, response) => {
    let student = findByID(request.params.id);
    
    student 
    ? response.json( {data: student} )
    : response.status(404).json( {error: {"message":"No record found!"} });
});

app.listen(port);