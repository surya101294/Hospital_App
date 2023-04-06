const express= require("express")
const { AppointmentModel } = require("../Models/AppointmentModel")
const AppointRouter= express.Router()

// AppointRouter.get("/:para", async (req, res) => {
//     let {para}= req.params
//     const data = await AppointmentModel.find({Specialisation: para})   
//     res.send(data)
// })

AppointRouter.post("/create", async (req, res) => {
    const payload = req.body
    console.log(payload);
    try {
        const new_data = new AppointmentModel(payload)
        await new_data.save()
        res.send("Appointment Created")
    } catch (err) {
        res.send({"msg":"Not created something Wrong", "err":err.message})
    }
})

// AppointRouter.get("/:para", async (req, res) => {
//     let { q } = req.query  
//     let {para}=req.params //page, limit, order

//     console.log(req.query)
//     console.log(para.toString())    //it is object
//     try {
//         let data;
//         if (req.query.page && req.query.q) {
//             let page = (Number(req.query.page))
//             console.log(page)
//             // let limit=(Number(req.query.limit))
//             let Total = (page - 1) * 2    //2 - 1*2
//             // let s= (Number(req.query.page))*2
//             data = await AppointmentModel.find({ Name: { $regex: `${q}`, '$options': 'i' } }).skip(Total).limit(4).sort({para:1})
//         }else if (req.query.q) {
//             data = await AppointmentModel.find({ Name: { $regex: `${q}`, $options: 'i' } }).sort({para:1})
//         }
//         else if (req.query.page) {
//             let page = (Number(req.query.page))
//             console.log(page)
//             // let limit=(Number(req.query.limit))
//             let Total = (page - 1) * 2    //2 - 1*2
//             // let s= (Number(req.query.page))*2
//             data = await AppointmentModel.find().skip(Total).limit(2).sort({para:1})
//         } else {
//             data = await AppointmentModel.find().sort({"Date":1})      //if query not available then .find({})
//         }
//         res.send(data)
//     } catch (err) {
//         console.log({ "message": "cannot get movies", "error": err.message });
//     }
// })

AppointRouter.patch("/update/:id", async (req, res) => {
    const { id } = req.params
    const payload = req.body
    try {
        await AppointmentModel.findByIdAndUpdate({ _id: id }, payload)
        res.send("Data Updated successfully")
    } catch (err) {
        console.log({ "message": "cannot update the movies", "error": err.message });
    }
})

AppointRouter.get("/", async (req, res) => {
    let perPage = 4;
    let page = parseInt(req.query.page) || 0;
    let q = req.query.q || "";
    
    try {
      AppointmentModel.aggregate([
        {
          $match: {
            $or: [
              { Name: { $regex: new RegExp(`${q}`, `i`) } },
            ],
          },
        },
        {
          $facet: {
            data: [
              { $skip: page * perPage },
              { $limit: perPage },
            ],
            count: [
              { $count: "total" },
            ],
          },
        },
      ])
        .then((result) => {
          let data = result[0].data;
          let count = result[0].count[0].total;
          res.send({
            message: "Query successful",
            status: 1,
            data: data,
            count: count,
            error: false,
          });
        })
        .catch((error) => {
          res.send({
            message: "Something went wrong" + error,
            status: 0,
            error: true,
          });
        });
    } catch (error) {
      res.send({
        message: "Something went wrong" + error.message,
        status: 0,
        error: true,
      });
    }
})

module.exports={AppointRouter}