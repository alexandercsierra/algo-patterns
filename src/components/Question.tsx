import { Stack, Box, Typography, Button } from "@mui/material";
import { IQuestion } from "../interfaces/question";
import AnswerSet from "./AnswerSet";
import CodeBlock from "./CodeBlock";

const Question = ({
  question,
  nextQuestion,
  nextLabel,
}: {
  question: IQuestion;
  nextQuestion: () => void;
  nextLabel: string;
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
        <CodeBlock>
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
      </Stack>
      <Box>
        <AnswerSet correct={answer} questionName={name} />
      </Box>
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
        onClick={nextQuestion}
      >
        {nextLabel}
      </Button>
    </Box>
  );
};

export default Question;
