import { Stack, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Home = (): React.ReactNode => {
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={4}
      minHeight={"100vh"}
    >
      <Typography
        variant={"h2"}
        color={"primary.main"}
        sx={{ fontWeight: "700" }}
      >
        Algo Patterns
      </Typography>
      <Typography>
        Learn different algorithm patterns. <br />
        Practice them on the go.
      </Typography>
      <NavLink to="/quiz">
        <Button
          variant={"contained"}
          sx={{
            mt: 4,
            textTransform: "lowercase",
            fontSize: "25px",
            width: "200px",
            background: "primary.main",
            borderRadius: "45px",
            fontWeight: "800",
          }}
        >
          start
        </Button>
      </NavLink>
    </Stack>
  );
};

export default Home;
