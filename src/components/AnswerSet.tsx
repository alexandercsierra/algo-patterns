import { Stack, Box, Typography } from "@mui/material";
import { answers } from "../data/testData";
import Answer from "./Answer";
import { useState, useEffect } from "react";

const AnswerSet = ({
  correct,
  questionName,
}: {
  questionName: string;
  correct: string;
}) => {
  const [selected, setSelected] = useState<string>("");

  // clear answer with each new question
  useEffect(() => {
    setSelected("");
  }, [questionName]);

  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <Box sx={{ pt: 2 }}>
      <Typography>Choose a pattern</Typography>
      <Stack
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          p: 2,
        }}
      >
        {answers.map((answer) => (
          <Answer
            answer={answer}
            handleClick={handleClick}
            isSelected={selected.includes(answer.id)}
            isCorrect={correct === answer.id}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default AnswerSet;
