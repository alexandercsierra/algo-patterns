import { Stack, Box, Typography, Button } from "@mui/material";
import { IQuestion } from "../interfaces/question";
import AnswerSet from "./AnswerSet";
import CodeBlock from "./CodeBlock";

const Question = ({
  question,
  nextQuestion,
  nextLabel,
  quizInfo,
}: {
  question: IQuestion;
  nextQuestion: () => void;
  nextLabel: string;
  quizInfo: { currQ: number; total: number };
}) => {
  const { name, questionText, input, output, info, answer } = question;
  return (
    <Box
      display={"flex"}
      justifyContent={{ md: "space-around", xs: "center" }}
      width={"90%"}
      p={2}
      flexDirection={{ md: "row", xs: "column" }}
      sx={{ overflowY: "auto" }}
    >
      <Stack
        display={"flex"}
        alignItems={"center"}
        mb={4}
        py={4}
        sx={{
          width: { xs: "100%", md: "80%" },
          borderRadius: "25px",
        }}
      >
        <Typography
          variant={"h5"}
          color={"primary"}
          mb={4}
          sx={{
            fontWeight: 800,
          }}
        >
          {name}
        </Typography>
        <CodeBlock quizInfo={quizInfo}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            p={4}
            textAlign={"left"}
          >
            <Typography variant={"body2"} mb={2}>
              {questionText}
            </Typography>
            <Typography variant={"body2"}>input: {input}</Typography>
            <Typography variant={"body2"}>output: {output}</Typography>
            <Typography variant={"body2"}>info: {info}</Typography>
          </Box>
        </CodeBlock>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <NextButton label={nextLabel} onClick={nextQuestion} />
        </Box>
      </Stack>
      <Box>
        <AnswerSet correct={answer} questionName={name} />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextButton
          label={nextLabel}
          onClick={() => {
            nextQuestion();
            window?.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </Box>
    </Box>
  );
};

const NextButton = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <Button
      sx={{
        alignSelf: "center",
        mt: 3,
        textTransform: "lowercase",
        borderRadius: "20px",
        padding: "5px",
        fontWeight: 800,
        color: "secondary",
        background: "primary",
        width: "200px",
      }}
      variant={"contained"}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default Question;
