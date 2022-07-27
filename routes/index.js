var express = require("express");
var router = express.Router();

const userList = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "jd@gmail.com",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/post-message", async (req, res) => {
  try {
    const dateTime = new Date();
    const clientMessage = req.body.clientMessage;
    const response = `Received client message: ${clientMessage}. Responded at ${dateTime.toString()}`;
    res.json({ serverMessage: response }).status(200);
  } catch (error) {
    res.json({ success: false }).status(500);
  }
});

router.post("/create-user", async (req, res, next) => {
  try {
    const lastUser = userList[userList.length - 1];
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newUser = {
      id: Number(lastUser.id + 1),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    userList.push(newUser);

    res.status(200).json({ message: "User has been added", success: true });
  } catch (e) {
    res.status(500).json({ message: "Error adding user." + e, success: false });
  }
});
module.exports = router;
