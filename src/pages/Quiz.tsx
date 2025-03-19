import { questionData } from "../data/testData";
import { IQuestion } from "../interfaces/question";
import Question from "../components/Question";
import { Box } from "@mui/material";

const Quiz = ({ quizData = questionData }: { quizData: IQuestion[] }) => {
  return (
    <Box>
      {quizData.map((q) => (
        <Question question={q} />
      ))}
    </Box>
  );
};
export default Quiz;
