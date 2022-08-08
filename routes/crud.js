const express = require("express");
const router = express.Router();
const EmployeeRouter = require("../models/employee");


// create
router.post("/create", async(req, res) => {
    var data = new EmployeeRouter({
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City
    })

    await data.save();
    res.json(data);
})

//getAll list
router.get("/list", async(req, res) => {
    var fetchList = await EmployeeRouter.find();
    res.json(fetchList);
})

//update
router.put("/update", async(req, res) => {
    var update = await EmployeeRouter.updateOne({_id: req.body._id}, {$set: {
        Name: req.body.Name,
        Age: req.body.Age,
        City: req.body.City,
    }})
    res.json(update);
})

//delete
router.delete("/delete/:id", async(req, res) => {
    var deleteData = await EmployeeRouter.findByIdAndRemove(req.params.id).then(e => {
        res.json({message: "Deleted Successfully!"});
    })

})


router.get("/", async(req, res) => {
   try {
    return res.json("get all list")
   } catch (error) {
    console.log(error)
   }
})

module.exports = router;