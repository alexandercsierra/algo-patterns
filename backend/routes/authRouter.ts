import express, { Request, Response } from "express";

import passport from "passport";
import { createJWT, authenticateToken } from "../src/utls/handleJWTs";
import Users, { IUser } from "../models/userModel";
import { ObjectId } from "mongodb";

// TODO: persist user with cookie or JWT

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// router.get("/", authenticateToken, (req: Request, res: Response) => {
//   res.status(200).json({ message: "welcome to auth router" });
// });

let userProfile: any = {};

// router.set("view engine", "ejs");

router.get("/success", (req: Request, res: Response): any =>
  res.send(userProfile)
);
router.get("/error", (req: Request, res: Response): any =>
  res.send("error logging in")
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj as any);
});

const { Strategy } = require("passport-google-oauth20");
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
passport.use(
  new Strategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: `${process.env.API_URL}/api/auth/google/redirect`,
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) {
      const JWT = createJWT({ accessToken, googleId: profile.id });
      userProfile = { ...profile, jwt: JWT };
      return done(null, userProfile);
    }
  )
);

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/error" }),
  async function (req: Request, res: Response) {
    const { user }: any = req;

    console.log({ user });

    const existingUser = await Users.findOne({
      googleId: user.id,
    });

    // add profile to mongo
    const profile = {
      googleId: user.id,
      name: user.displayName,
      email: user.emails[0].value,
      photo: user.photos[0].value,
    };

    let createdUser: any = { _id: "" };
    // TODO: put this in a try catch
    if (!existingUser) {
      createdUser = await Users.create(profile);
    }

    res.redirect(
      `${process.env.HOST_NAME}/signin?profile=` +
        encodeURIComponent(
          JSON.stringify({
            _id: existingUser?._id || createdUser?._id,
            name: user.displayName,
            email: user.emails[0].value,
            photo: user.photos[0].value,
            token: user.jwt,
          })
        )
    );
  }
);

router.post(
  "/getProfileInfo",
  authenticateToken,
  async (req: Request, res: Response): Promise<any> => {
    const { user }: any = req;
    const existingUser = await Users.findOne({ googleId: user?.googleId });
    if (!existingUser) return res.status(404).json({ error: "User not found" });

    const profileInfo = {
      _id: existingUser?._id,
      name: existingUser?.name,
      email: existingUser?.email,
      photo: existingUser?.photo,
    };

    res.status(200).json({ profileInfo });
  }
);

router.put(
  "/update-name",
  async (req: Request, res: Response): Promise<any> => {
    const { userId, newName } = req.body;

    console.log({ userId, newName });

    const existingUser = await Users.findOne({ _id: new ObjectId(userId) });
    if (!existingUser) return res.status(404).json({ error: "User not found" });
    const newUser = await Users.findOneAndUpdate(
      { _id: userId },
      { name: newName },
      { new: true }
    );

    res.status(200).json({ newUser });
  }
);

router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default router;
