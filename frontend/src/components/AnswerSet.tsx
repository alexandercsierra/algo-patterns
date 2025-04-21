import { Stack, Box } from "@mui/material";
import { answers } from "../data/testData";
import Answer from "./Answer";
import { useState, useEffect } from "react";
import { IAnswer } from "../interfaces/question";
import NextButton from "./NextButton";

const AnswerSet = ({
  correct,
  questionName,
  nextOnClick,
}: {
  questionName: string;
  correct: string;
  nextOnClick: () => void;
}) => {
  const [selected, setSelected] = useState<string>("");
  const [displayAnswers, setDisplayAnswers] = useState<IAnswer[]>(answers);

  const handleClick = (id: string) => {
    setSelected(id);
  };

  // const showCorrectOnly = (id: string) => {
  //   setDisplayAnswers(answers.filter((answer) => answer.id === id));
  // };

  // clear answer with each new question
  useEffect(() => {
    setSelected("");
    setDisplayAnswers(answers);
  }, [questionName]);

  return (
    <Box
      sx={{
        pt: 1,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
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
            showCorrectOnly={() => {}}
          />
        ))}
      </Stack>
      <NextButton
        disabled={selected !== correct}
        label={"next question"}
        onClick={nextOnClick}
      />
    </Box>
  );
};

export default AnswerSet;
