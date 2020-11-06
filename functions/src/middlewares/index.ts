import { Application, Request, Response, NextFunction } from "express";
import * as cookieParser from 'cookie-parser';
import * as compression from "compression";
import * as cors from "cors";
import * as passport from "passport";
import * as parser from "body-parser";

const handleCors = (app: Application) => {
    app.use(cors());
};

const handleBodyRequestParsing = (app: Application) => {
    app.use(parser.urlencoded({ extended: true }));
    app.use(parser.json());
};

const handleCookieParsing = (app: Application) => {
    app.use(cookieParser());
}

const handleCompression = (app: Application) => {
    app.use(compression());
};

const handleLog = (app: Application) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        // tslint:disable-next-line:no-console
        console.log('Logged')
        next();
    });
}

const handlePassport = (app: Application) => {
    app.use(passport.initialize());
}

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCookieParsing,
  handleCompression,
  handleLog,
  handlePassport
];