// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import applicationRouter from "./routes/application.route.js";
// import companyRoute from "./routes/company.route.js";
// import jobRoute from "./routes/job.route.js";
// import userRoute from "./routes/user.route.js";
// import connectDB from "./utils/db.js";



// dotenv.config({});

// const app=express()

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser())
// const corsOption = {
//     origin:'http//localhost:5173',
//     credentials:true
// }
// app.use(cors(corsOption));

// const PORT = process.env.PORT || 3000;

// app.use("/api/v1/user",userRoute);
// app.use("/api/v1/company",companyRoute);
// app.use("/api/v1/job",jobRoute);
// app.use("/api/v1/application",applicationRouter);

// //"http://localhost:8000/api"
// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// })
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import applicationRouter from "./routes/application.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import userRoute from "./routes/user.route.js";
import connectDB from "./utils/db.js";

dotenv.config({});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//corrected url and credentials spelling
const corsOption = {
    origin: 'http://localhost:5173', 
    credentials: true
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running at port ${PORT}`);
});