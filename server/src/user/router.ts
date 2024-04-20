import { Router } from "express";
import { UserCollection } from "./collection";

const userCollection = new UserCollection();
const userRouter = Router();

userRouter.post("/signup", userCollection.Register);
userRouter.post("/activate", userCollection.activateUser);
userRouter.put("/avatar/:id", userCollection.Update);
userRouter.post("/signin", userCollection.Login);
userRouter.get("/get-logged-in", userCollection.getLoggedIn);

export default userRouter;
