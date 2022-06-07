const express = require("express");
const app = express();
const port = 8005;

app.use(express.json());
// create 4 endpoints (get, post, put, delete)

// 3
app.get("/home", (req, res) => {
  res.status(201).json({
    message: "found user",
  });
});

//4
app.post("/home", (req, res) => {
  res.status(201).json({
    message: "found user",
  });
});

//5
app.post("/about", (req, res) => {
  if (req.body.email === "" && req.body.password === "") {
    res.status(404).json({
      message: "username or password is cannot be empty",
    });
  } else {
    res.status(200).json({
      message: "username created successfully",
    });
  }
});

// 6
app.put("/put", (req, res) => {
  res.status(201).json({
    message: "username has been updated successfully",
  });
});

//7
app.delete("/about", (req, res) => {
  if (req.body.id === "") {
    res.status(404).json({
      message: "id cannot be empty",
    });
  } else {
    res.status(201).json({
      message: "user deleted",
    });
  }
});

app.listen(port);
