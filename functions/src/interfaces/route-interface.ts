import { Router } from "express";

interface Route {
    routes: () => Router
}

export default Route
