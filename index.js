// write basic express bolierplate code
// with express.json() middleware
const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const port = 3000

app.post("/todo",(req, res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong input",
        })
        return;
    }
    todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false,
        
    })
    res.json({
        msg:"Todo created"
    })
})
app.get("/todo", async function(req, res){
    const todos = await todo.find({});

    res.json({
        todos
    })

})
app.put("/completed",async (req, res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong input",
        })
    }
    await todo.update({
        _id:req.boby.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo mark as completed"
    })
})