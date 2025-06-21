require("dotenv").config();
const express =require("express");
const cors = require("cors");
const authRoute=require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware=require("./middleware/error-middleware")
const contactRoute =require("./router/contact-router");
const serviceRoute = require("./router/service-router");
// const adminRoute = require("./router/admin-router");
// const messageRoute= require("../server/router/message-router")
const app = express();

app.use(express.json());             //this is middleware

//cors
const corsOptions={
    origin:"http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));


app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
// app.use("/api/admin",adminRoute);
// app.use("/api/message",messageRoute);

app.use(errorMiddleware);

const PORT =5000;
connectDb().then(() => {
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`)
    });
})

