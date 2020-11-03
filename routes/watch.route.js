const router = require("express").Router();
const Watch = require("../model/watch.model");
const checkToken = require("../config/config");

/* 
    @route GET api/watches/:id
    @desc Gets one watch
    @access public
*/
router.get("/:id", async (req, res) => {
  try {
    let watch = await Watch.findById(req.params.id);

    res.status(200).json({
      message: "watch found",
      watch,
    });
  } catch (err) {
    res.status(500).json({
      message: "/:id did not work",
      statuscode: "EB500",
    });
  }
});


/* 
    @route PUT api/watches/:id
    @desc updates one watch
    @access public
*/
router.put("/:id", async (req, res) => {
  try {
    let watch = await Watch.findByIdAndUpdate(req.params.id, req.body);

    if (watch) {
      res.status(200).json({
        message: "Watch updated with success",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "/:id update did not work",
    });
  }
});


/* 
    @route DELETE api/watches/:id
    @desc deletes one watch
    @access public
*/
router.delete("/:id", async (req, res) => {
  try {
    let watchDelete = await Watch.findByIdAndDelete(req.params.id);

    if (watchDelete) {
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
    @route POST api/watches
    @desc Gets all watches
    @access public
*/
router.post("/", async (req, res) => {
  try {
    let watch = new Watch(req.body);

    let savedWatch = await watch.save();

    res.status(201).json({
      message: "Creation successful",
      watch,
    });
  } catch (error) {
    res.status(500).json({
      message: "There was an error creating this clothing",
      statuscode: "EB500",
    });
  }
});


/* 
    @route GET api/watches
    @desc Gets all watches
    @access public
*/
router.get("/", checkToken, async (req, res) => {
// router.get("/", async (req, res) => {
    // console.log(req.user);
  try {
    let watches = await Watch.find();

    res.status(200).send({
      count: watches.length,
      watches,
    });
  } catch (error) {
    res.status(500).json({
      message: "Couldn't get all the watches",
      statuscode: "EB500",
    });
  }
});


module.exports = router;