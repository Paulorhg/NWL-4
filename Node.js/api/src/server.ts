import express, { request, response } from 'express';

const app = express();

app.get("/users", (request, response) =>{
    return response.json("Hello world")
})

app.listen(3333, () => console.log("Server is running!"));