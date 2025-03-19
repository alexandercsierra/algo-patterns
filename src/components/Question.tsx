import { Stack, Box, Typography } from "@mui/material";
import { IQuestion } from "../interfaces/question";
import AnswerSet from "./AnswerSet";

const Question = ({ question }: { question: IQuestion }) => {
  const { name, questionText, input, output, info, answer } = question;
  return (
    <Box display={"flex"} justifyContent={"space-around"} width={"100%"} mb={4}>
      <Stack
        mb={4}
        py={4}
        sx={{
          width: "80%",
          background: "#244A57",
          borderRadius: "25px",
        }}
      >
        <Typography variant={"h5"}>{name}</Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          p={4}
          textAlign={"left"}
        >
          <Typography mb={2}>{questionText}</Typography>
          <Typography>input: {input}</Typography>
          <Typography>output: {output}</Typography>
          <Typography>info: {info}</Typography>
        </Box>
      </Stack>
      <Box>
        <AnswerSet correct={answer} />
      </Box>
    </Box>
  );
};

export default Question;
