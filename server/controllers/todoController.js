const todoModel = require("../models/todoModel");

module.exports.getTodos = async (req, res) => {
    const Todo = await todoModel.find()
    res.send(Todo)
}

module.exports.saveTodos = (req, res) => {
    const Todo = req.body

    todoModel.create(Todo)
        .then(data => {
            console.log("save success")
            res.status(201).send(data)
        })
        .catch(
            (error) => console.log(error)
        )
}


module.exports.updateTodos = (req, res) => {
    const { iD } = req.params
    const Todo = req.body

    todoModel.findByIdAndUpdate(iD, Todo)
        .then(() => {

            res.send("Update Success")
        })
        .catch(
            (error) => {
                console.log(error)
                res.send({ error: error, msg: "Something went wrong when Updating!" })
            }
        )
}


module.exports.deleteTodos = (req, res) => {
    const { iD } = req.params


    todoModel.findByIdAndDelete(iD)
        .then(() => {

            res.send("Delete Success")
        })
        .catch(
            (error) => {
                console.log(error)
                res.send({ error: error, msg: "Something went wrong when Deleting!" })
            }
        )
}