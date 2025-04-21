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
      disableRipple
      sx={(theme) => ({
        m: { xs: 0.75, md: 1 },
        border: "2px solid grey",
        width: "fit-content",
        display: "flex",
        justifyContent: "flex-start",
        textTransform: "lowercase",
        background,
        borderRadius: "45px",
        color: isSelected ? "#1f2122" : "text.primary",
        transition: "all 0s ease-in-out !important",
        boxShadow: "3px 3px 0px 0px grey",

        "&:focus": {
          outline: "none !important",
          boxShadow: "none !important",
        },
        "&:hover": {
          background: isSelected ? "" : theme.palette.primary.main,
          color: "secondary.main",
          transition: "all 0s ease-in-out !important",
          border: "2px solid grey",
        },
      })}
    >
      <Typography
        sx={{
          color: "inherit",
          textAlign: "left",
          fontWeight: 800,
          fontSize: { xs: ".75rem", md: "1rem" },
        }}
      >
        {ans}
      </Typography>
    </Button>
  );
};

export default Answer;
