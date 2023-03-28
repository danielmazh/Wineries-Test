// const express = require("express");
// const appRoutes = require("./routers/AppRoutes");
// const config = require("./config");

// const PORT = process.env.PORT || 3001;

// const app = express();

// app.use(express.json());

// app.use("/api", appRoutes);

// app.use((err, req, res, next) => {
//    console.error(err);
//    res.status(500).send("Internal Server Error");
// });

// app.listen(PORT, () => {
//    console.log(`Server listening on ${PORT}`);
// });


const express = require("express");
const appRoutes = require("./routers/AppRoutes");
const config = require("./config");
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3001;

const app = express();

const authenticateJWT = (req, res, next) => {
   const authHeader = req.headers.authorization;
 
   if (authHeader) {
     const token = authHeader.split(' ')[1];
 
     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
       if (err) {
         return res.sendStatus(403);
       }
 
       req.user = user;
       next();
     });
   } else {
     res.sendStatus(401);
   }
 };
 

app.use(express.json());

app.use("/api", appRoutes);

app.use((err, req, res, next) => {
   console.error(err);
   res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
});
