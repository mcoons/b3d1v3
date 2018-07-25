const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000)


// ID,First Name,Last Name,Home Town
// 1,Alice,Zephyr,Seattle
// 2,Bob,Yellow,Vancouver
// 3,Claire,Xylitol,Toledo
// 4,Daniel,Winston,Akron
// 5,Edina,Veritas,Wichita


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
    var retval;
    data.forEach( c => {if (c["ID"] == id) {retval = c}})
    return retval;
}

app.use(cors());

app.get("/", (request,response) => {
    response.json( 
        {data: data });
});

app.get("/:id", (request, response) => {
    let student = findByID(request.params.id);
    response.json( 
        student 
        ? {data: student} 
        : {error: {"message":"No record found!"} }
    );
});

app.listen(port)