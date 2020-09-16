import express from "express";
import { compose } from "compose-middleware";
import jwt from "express-jwt";
import bearer from "express-bearer-token";

const app = express();

app.use(compose(bearer(), jwt({ secret: "shhh" })));
