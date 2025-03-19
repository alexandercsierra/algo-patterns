import { Stack, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = (): React.ReactNode => {
  return (
    <Stack display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Typography variant={"h2"}>Practice Algorithm Patterns</Typography>
      <NavLink to="/quiz">
        <Button
          variant={"contained"}
          sx={{
            mt: 4,
            textTransform: "lowercase",
            fontSize: "25px",
            width: "200px",
            background: "#244A57",
            borderRadius: "14px",
          }}
        >
          start
        </Button>
      </NavLink>
    </Stack>
  );
};

export default Home;
