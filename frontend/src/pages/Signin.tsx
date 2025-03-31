import { Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/slices/authSlice";
import { useEffect } from "react";

const SignIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  const [searchParams] = useSearchParams();
  const profile = searchParams.get("profile");
  const profileInfo = JSON.parse(profile || "{}");
  const addUserToRedux = (user: any) => dispatch(addUser(user));

  useEffect(() => {
    if (profileInfo && !user) {
      addUserToRedux(profileInfo);
    }
  }, [profileInfo]);

  if (profileInfo) {
    return (
      <div>
        <img
          src={profileInfo.photo}
          style={{ width: "250px", borderRadius: "25px" }}
        />
        <Typography variant={"h5"}>Welcome {profileInfo.name}</Typography>
      </div>
    );
  }

  return <div>SignIn</div>;
};

export default SignIn;
