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
      <Button
        href={`${import.meta.env.VITE_API_URL}/api/auth/login/google`}
        variant={"contained"}
        sx={{
          color: "secondary",
          backgroundColor: "text.primary",
          textTransform: "none",
          fontSize: "1.2rem",
          fontWeight: "bold",
          borderRadius: "25px",
        }}
      >
        Sign in with Google
      </Button>
    </Stack>
  );
};

export default Home;
