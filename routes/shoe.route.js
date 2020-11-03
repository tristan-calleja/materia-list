const router = require("express").Router();
const Shoe = require("../model/shoe.model");
const checkToken = require("../config/config");

/* 
    @route GET api/shoes/:id
    @desc Gets one shoe
    @access public
*/
router.get("/:id", async (req, res) => {
  try {
    let shoe = await Shoe.findById(req.params.id);

    res.status(200).json({
      message: "shoe found",
      shoe,
    });
  } catch (err) {
    res.status(500).json({
      message: "/:id did not work",
      statuscode: "EB500",
    });
  }
});


/* 
    @route PUT api/shoes/:id
    @desc updates one shoe
    @access public
*/
router.put("/:id", async (req, res) => {
  try {
    let shoe = await Shoe.findByIdAndUpdate(req.params.id, req.body);

    if (shoe) {
      res.status(200).json({
        message: "Shoe updated with success",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "/:id update did not work",
    });
  }
});


/* 
    @route DELETE api/shoes/:id
    @desc deletes one shoe
    @access public
*/
router.delete("/:id", async (req, res) => {
  try {
    let shoeDelete = await Shoe.findByIdAndDelete(req.params.id);

    if (shoeDelete) {
      res.status(200).json({
        message: "Delete action worked",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Delete action did not work",
      statuscode: "EB500",
    });
  }
});


/* 
    @route POST api/clothings
    @desc Gets all clothings
    @access public
*/
router.post("/", async (req, res) => {
  try {
    let shoe = new Shoe(req.body);

    let savedShoe = await shoe.save();

    res.status(201).json({
      message: "Creation successful",
      shoe,
    });
  } catch (error) {
    res.status(500).json({
      message: "There was an error creating this shoe",
      statuscode: "EB500",
    });
  }
});


/* 
    @route GET api/clothings
    @desc Gets all clothings
    @access public
*/
router.get("/", checkToken, async (req, res) => {
// router.get("/", async (req, res) => {
    // console.log(req.user);
  try {
    let shoes = await Shoe.find();

    res.status(200).send({
      count: shoes.length,
      shoes,
    });
  } catch (error) {
    res.status(500).json({
      message: "Couldn't get all the shoes",
      statuscode: "EB500",
    });
  }
});


module.exports = router;