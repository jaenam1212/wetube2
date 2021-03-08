import express from "express";
import morgan from "morgan";
import helmat from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res, next) => res.send("hello from ass");

const handleProfile = (req, res, next) => res.send("U R on my profile");

const betweenHome = (req, res, next) => {
    console.log("between");
    next();
}

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmat());
app.use(morgan("dev"));
app.use(morgan("tiny"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);