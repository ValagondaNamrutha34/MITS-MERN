let todos=[];
let id=1;
const Todo = require("../models/todo");
exports.getTodo =async(req,res)=>{
   try{
    let todos =await Todo.find();
    res.status(200).json(todos);
   } catch(err){
    res.status(500).send(err)
   }
}

exports.createTodo=async(req,res)=>{
  try{
    const {task}=req.body;
    if(task===undefined)
        return res.status(401).json({message:"Task Not found"})
   const todos= await Todo.create({
        task,
        Completed:false
    })
    res.status(201).json(todos);
    }catch(err){
        res.status(500).send(err);
    }
};


exports.updateTodo=async(req,res)=>{
   try{
    const todo= await Todo.findById(req.params.id);
  if(!todo){
    res.status(404).json({message:"Todo not found"})
  }
  todo.task=req.body.task || todo.task;
  todo.completed = req.body.completed===undefined?todo.completed:req.body.completed
  await todo.save();
  res.status(200).json(todo)
   }catch(err){
    res.status(500).send(err);
   }
};

exports.deleteTodo = async (req, res) => {
    try {
    // const todo = await Todo.findById(req.params.id);
    //     if(!todo){
    //         res.status(401).json({message:"Todo not found"});
    //     }
    // todo.task= req.body.task || todo.task;
    // todo.completed= req.body.completed===undefined ? todo.completed : req.body.completed;
    // await todo.save();
    // res.status(200).json(todo);
    const todo = await Todo.findByIdAndDelete(req.params.id,req.body,{new:true});
    res.status(200).json(todo);
    } catch (err) {
        res.status(500).send(err);
    }
};