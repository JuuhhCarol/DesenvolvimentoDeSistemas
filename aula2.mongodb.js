// show databases

use ("db")

db.pessoas.insertOne({
    name:"Júlia",
    lastname: "Santos",
    salary: 2

})

use("db")
db.pessoas.insertMany([ 

    {   name: "maluzinha",
        lastname: "dispersacomentarios", 
        salary: 2 
    }, 
    {   name: "jhennie", 
        lastname: "highalma", 
        salary: 2 
    }, 
    {   name: "thay",
        lastname: "de ogun", 
        salary: 2 
    }, 
    {   name: "fer",
        lastname: "calopsita", 
        salary: 2 
    }, 
    {   name: "joy",
        lastname: "tesoura", 
        salary: 2 
    }, 
    {   name: "kessy",
        lastname: "casada", 
        salary: 2 
    }, 
    {   name: "lays",
        lastname: "chinesinha", 
        salary: 2 
    }, 
    {   name: "kety",
        lastname: "du sol", 
        salary: 2 
    }, 
    {   name: "beca",
        lastname: "da puc", 
        salary: 2 
    }, 
    ]);

use("db")
db.pessoas.find({name:/j/})

use("db")
db.pessoas.find({name:/^j.*y$/})