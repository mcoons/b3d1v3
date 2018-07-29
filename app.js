const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000);

var data = [
    {
        id:1,
        firstName:"Alice",
        lastName:"Zephyr",
        homeTown:"Seattle"
    },
    {
        id:2,
        firstName:"Bob",
        lastName:"Yellow",
        homeTown:"Vancouver"
    },
    {
        id:3,
        firstName:"Claire",
        lastName:"Xylitol",
        homeTown:"Toledo"
    },
    {
        id:4,
        firstName:"Daniel",
        lastName:"Winston",
        homeTown:"Akron"
    },
    {
        id:5,
        firstName:"Edina",
        lastName:"Veritas",
        homeTown:"Wichita"
    }
];

function findByID(id){
    return data.filter( s => s[id] == id)[0];
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