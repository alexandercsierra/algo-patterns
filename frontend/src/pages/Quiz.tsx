import { questionData } from "../data/testData";
import { IQuestion } from "../interfaces/question";
import Question from "../components/Question";
import { Box } from "@mui/material";
import { useState } from "react";
import ProgressBar from "../components/ProgressBar";

const Quiz = ({ quizData = questionData }: { quizData?: IQuestion[] }) => {
  const [currQ, setCurrQ] = useState(0);
  const [qFade, setQFade] = useState(true);
  const lastQ = quizData.length - 1;

  const nextQuestion = () => {
    setQFade(false);
    setTimeout(() => {
      if (currQ < lastQ) {
        setCurrQ(currQ + 1);
      } else {
        setCurrQ(0);
      }
      setQFade(true);
    }, 600);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <ProgressBar currQ={currQ + 1} total={lastQ + 1} />
      <Question
        fade={qFade}
        quizInfo={{ currQ: currQ + 1, total: lastQ + 1 }}
        question={quizData[currQ]}
        nextQuestion={nextQuestion}
        // nextLabel={currQ < lastQ ? "next" : "restart"}
      />
    </Box>
  );
};
export default Quiz;
