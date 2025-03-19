import { Stack, Box, Typography } from "@mui/material";
import { answers } from "../data/testData";
import Answer from "./Answer";
import { useState } from "react";

const AnswerSet = ({ correct }: { correct: string }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (id: string) => {
    if (selected.includes(id)) {
      const filtered = selected.filter((selId) => selId !== id);
      setSelected(filtered);
    } else {
      setSelected([...selected, id]);
    }

    console.log({ selected });
  };

  return (
    <Box>
      <Typography>Choose a pattern</Typography>
      <Stack gap={2}>
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
