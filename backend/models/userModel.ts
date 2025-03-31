import { Schema, model } from "mongoose";

interface IUser {
  googleId: string;
  name: string;
  email: string;
  photo: string;
}

const User = new Schema(
  {
    googleId: String,
    name: String,
    email: String,
    photo: String,
  },
  { timestamps: true }
);

const UserModel = model("User", User);
export { IUser };
export default UserModel;
