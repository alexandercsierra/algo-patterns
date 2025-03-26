import { Button, Typography } from "@mui/material";
import { IAnswer } from "../interfaces/question";
import { useState, useEffect } from "react";

const Answer = ({
  answer,
  handleClick,
  isSelected,
  isCorrect,
  showCorrectOnly,
}: {
  answer: IAnswer;
  handleClick: (id: string) => void;
  isSelected: boolean;
  isCorrect: boolean;
  showCorrectOnly: (id: string) => void;
}): React.ReactElement => {
  const { id, ans } = answer;
  const [background, setBackground] = useState<string>("none");

  const getBackground = () => {
    if (isCorrect && isSelected) {
      showCorrectOnly(id);
      return setBackground("#2CA357");
    }
    if (isSelected) return setBackground("#c14d4d");

    return setBackground("none");
  };

  useEffect(() => {
    getBackground();
  }, [isSelected, isCorrect]);
  return (
    <Button
      onClick={() => handleClick(id)}
      variant="contained"
      sx={(theme) => ({
        display: "flex",
        justifyContent: "flex-start",
        textTransform: "lowercase",
        background,
        borderRadius: "45px",
        boxShadow: "none",
        color: isSelected ? "#1f2122" : "text.primary",
        transition: "all 0s ease-in-out !important",
        "&:focus": {
          outline: "none",
          boxShadow: "none",
        },
        "&:hover": {
          background: isSelected ? "" : theme.palette.primary.main,
          color: "secondary.main",
          transition: "all 0s ease-in-out !important",
        },
      })}
    >
      <Typography
        variant={"h6"}
        sx={{
          color: "inherit",
          fontWeight: 800,
        }}
      >
        {ans}
      </Typography>
    </Button>
  );
};

export default Answer;
