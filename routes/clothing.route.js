const router = require("express").Router();
const Clothing = require("../model/clothing.model");
const checkToken = require("../config/config");

/* 
    @route GET api/clothings/:id
    @desc Gets one clothing
    @access public
*/
router.get("/:id", async (req, res) => {
  try {
    let clothing = await Clothing.findById(req.params.id);

    res.status(200).json({
      message: "clothing found",
      clothing,
    });
  } catch (err) {
    res.status(500).json({
      message: "/:id did not work",
      statuscode: "EB500",
    });
  }
});


/* 
    @route PUT api/clothings/:id
    @desc updates one clothing
    @access public
*/
router.put("/:id", async (req, res) => {
  try {
    let clothing = await Clothing.findByIdAndUpdate(req.params.id, req.body);

    if (clothing) {
      res.status(200).json({
        message: "Clothing updated with success",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "/:id update did not work",
    });
  }
});


/* 
    @route DELETE api/clothings/:id
    @desc deletes one clothing
    @access public
*/
router.delete("/:id", async (req, res) => {
  try {
    let titleDelete = await Clothing.findByIdAndDelete(req.params.id);

    if (titleDelete) {
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
    let clothing = new Clothing(req.body);

    let savedClothing = await clothing.save();

    res.status(201).json({
      message: "Creation successful",
      clothing,
    });
  } catch (error) {
    res.status(500).json({
      message: "There was an error creating this clothing",
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
    let clothings = await Clothing.find();

    res.status(200).send({
      count: clothings.length,
      clothings,
    });
  } catch (error) {
    res.status(500).json({
      message: "Couldn't get all the clothings",
      statuscode: "EB500",
    });
  }
});


module.exports = router;