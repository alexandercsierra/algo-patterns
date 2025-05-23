import { Box, Button, Typography } from "@mui/material";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1000px",
        margin: "0 auto",
        px: { xs: 3, md: 0 },
      }}
    >
      <Typography
        variant={"h3"}
        sx={{ color: "primary.main", fontWeight: "700", fontSize: "2.5rem" }}
      >
        Algo Pattern Practice
      </Typography>
      <Typography mt={2} sx={{ fontSize: "1rem" }}>
        study patterns to help you master algorithm problems on the go
      </Typography>
      <Box
        sx={{
          border: "2px solid grey",
          borderRadius: "25px",
          width: "100%",
          boxShadow: "3px 4px 0px 0px grey",
          my: 4,
        }}
      >
        <Question
          nextQuestion={() => {}}
          noAnswers={true}
          quizInfo={{ currQ: 1, total: 1 }}
          question={{
            input: "example input",
            output: "example output",
            info: "Fizzbuzz is a common coding challenge that tests your understanding of loops and conditionals.",
            name: "Container of Water",
            questionText:
              "Find the largest container that can hold water between two lines.",
            answer: "example answer",
          }}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Answer
            answer={{ id: "1", ans: "two pointer" }}
            handleClick={() => {}}
            isSelected={true}
            isCorrect={true}
            showCorrectOnly={() => {}}
          />
        </Box>
      </Box>
      <Typography
        my={2}
        sx={{
          maxWidth: "500px",
          textAlign: "left",
          fontSize: "1rem",
        }}
      >
        Grinding algorithm problems is a necessary evil if you want to land that
        perfect software job today. But a smarter approach to studying involves
        really getting a handle on the patterns behind the problems. Stop
        memorizing solutions and start identifying the patterns that can help
        you solve problems more efficiently.
      </Typography>
      <Button
        variant={"contained"}
        sx={{
          borderRadius: "25px",
          textTransform: "none",
          color: "inherit",
          bgcolor: "primary.dark",
          px: 4,
          mt: 2,
          "&:focus": {
            outline: "none",
          },
          // py: 2,
        }}
      >
        <NavLink
          to={"/quiz"}
          style={{
            color: "inherit",
            textDecoration: "none",
            fontWeight: "800",
            fontSize: "1.2rem",
          }}
        >
          Get Started
        </NavLink>
      </Button>
    </Box>
  );
};

export default Home;
