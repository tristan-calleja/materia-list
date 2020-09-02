const router = require("express").Router();
const User = require("../model/user.model");
const checkToken = require("../config/config");

// /* show single user */
// router.get("/show/:id", (req, res) => {
//     User.findById(req.params.id)
//       .then((user) => {
//             res.render("users/show");
//           })
//       .catch((err) => {
//         console.log(err);
//       });
//   });

  router.get("/user", checkToken, async (req, res) => {
    try {
      let user = await User.findById(req.user.id, "-password");
      console.log("user profile");
      res.status(200).json({
        user,
      });
    } catch (error) {
      res.status(500).json({
        message: "Something is wrong!",
      });
    }
  });

module.exports = router;