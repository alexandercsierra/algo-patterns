import { Stack, Box, Typography } from "@mui/material";
import { IQuestion } from "../interfaces/question";

const Question = ({ question }: { question: IQuestion }) => {
  const { questionText, input, output, info } = question;
  return (
    <Stack
      my={4}
      py={4}
      sx={{
        width: "100%",
        background: "#244A57",
        borderRadius: "25px",
      }}
    >
      <Typography variant={"h5"}>{questionText}</Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        p={4}
        textAlign={"left"}
      >
        <Typography>input: {input}</Typography>
        <Typography>output: {output}</Typography>
        <Typography>info: {info}</Typography>
      </Box>
    </Stack>
  );
};

export default Question;
