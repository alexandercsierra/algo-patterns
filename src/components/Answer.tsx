import { Button } from "@mui/material";
import { IAnswer } from "../interfaces/question";

const Answer = ({
  answer,
  handleClick,
  isSelected,
  isCorrect,
}: {
  answer: IAnswer;
  handleClick: (id: string) => void;
  isSelected: boolean;
  isCorrect: boolean;
}): React.ReactElement => {
  const { id, ans } = answer;

  const getBackground = () => {
    if (isCorrect && isSelected) return "green";
    if (isSelected) return "black";
    return "#244A57";
  };
  return (
    <Button
      onClick={() => handleClick(id)}
      variant="contained"
      sx={{
        background: getBackground(),
        borderRadius: "10px",
        py: 1.5,
      }}
    >
      {ans}
    </Button>
  );
};

export default Answer;
