import { Router } from "express";
import { BootCampCollection } from "./collection";

const bootcampRouter = Router();
const bootcampCollection = new BootCampCollection();

bootcampRouter.post("/create", bootcampCollection.create);
bootcampRouter.get("/", bootcampCollection.findAll);
bootcampRouter.get("/:id", bootcampCollection.findOne);
bootcampRouter.put("/update/:id", bootcampCollection.update);
bootcampRouter.delete("/delete/:id", bootcampCollection.delete);

export default bootcampRouter;
