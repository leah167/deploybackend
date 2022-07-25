var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/post-message", async (req, res, next) => {
  try {
    const dateTime = new Date();
    const clientMessage = req.body.clientMessage;
    res.json(
      `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`
    );
  } catch (error) {
    res.json({ success: false }).status(500);
  }
});
module.exports = router;
