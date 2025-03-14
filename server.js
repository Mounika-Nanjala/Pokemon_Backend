import express from "express";
import errorHandler from "./utils/errorhandler.js";

const app = express();

app.use(express.json());

app.use(errorHandler);
