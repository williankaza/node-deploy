import { fastify } from "fastify";

const app = fastify();
var quantity: number = 0;
app.get("/health", (request, reply)=>{
    quantity++;
    return reply.status(200).send({
        code: quantity,
        message: "Hellow, I'm working."
    })
})

app.listen({
    port: 3000
}).then(()=>{
    console.log("Hellow!")
})