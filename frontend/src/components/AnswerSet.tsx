import { Stack, Box, Typography } from "@mui/material";
import { answers } from "../data/testData";
import Answer from "./Answer";
import { useState, useEffect } from "react";
import { IAnswer } from "../interfaces/question";

const AnswerSet = ({
  correct,
  questionName,
}: {
  questionName: string;
  correct: string;
}) => {
  const [selected, setSelected] = useState<string>("");
  const [displayAnswers, setDisplayAnswers] = useState<IAnswer[]>(answers);

  const handleClick = (id: string) => {
    setSelected(id);
  };

  const showCorrectOnly = (id: string) => {
    setDisplayAnswers(answers.filter((answer) => answer.id === id));
  };

  // clear answer with each new question
  useEffect(() => {
    setSelected("");
    setDisplayAnswers(answers);
  }, [questionName]);

  return (
    <Box sx={{ pt: 2 }}>
      <Typography>Choose a pattern</Typography>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "90%",
          p: 2,
        }}
      >
        {displayAnswers.map((answer) => (
          <Answer
            answer={answer}
            handleClick={handleClick}
            isSelected={selected === answer.id}
            isCorrect={correct === answer.id}
            showCorrectOnly={showCorrectOnly}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default AnswerSet;
