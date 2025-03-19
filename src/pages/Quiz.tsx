import { questionData } from "../data/testData";
import { IQuestion } from "../interfaces/question";
import Question from "../components/Question";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const Quiz = ({ quizData = questionData }: { quizData?: IQuestion[] }) => {
  const [currQ, setCurrQ] = useState(0);
  const lastQ = quizData.length - 1;

  const nextQuestion = () => {
    if (currQ < lastQ) {
      setCurrQ(currQ + 1);
    } else {
      setCurrQ(0);
    }
  };

  return (
    <Box>
      <Box></Box>
      <Box>
        <Question question={quizData[currQ]} />
        <Button
          sx={{
            textTransform: "lowercase",
            borderRadius: "20px",
            padding: "5px",
            background: "#1a4983",
          }}
          variant={"contained"}
          onClick={nextQuestion}
        >
          {currQ < lastQ ? "next" : "restart"}
        </Button>
      </Box>
    </Box>
  );
};
export default Quiz;
