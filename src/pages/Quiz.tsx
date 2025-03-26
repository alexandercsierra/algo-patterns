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
      <Question
        question={quizData[currQ]}
        nextQuestion={nextQuestion}
        nextLabel={currQ < lastQ ? "next" : "restart"}
      />
    </Box>
  );
};
export default Quiz;
