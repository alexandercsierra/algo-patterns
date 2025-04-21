import { Stack, Box, Typography } from "@mui/material";
import { IQuestion } from "../interfaces/question";
import AnswerSet from "./AnswerSet";
import CodeBlock from "./CodeBlock";

const Question = ({
  question,
  nextQuestion,
  quizInfo,
  noAnswers = false,
  fade = true,
}: {
  question: IQuestion;
  nextQuestion: () => void;
  quizInfo: { currQ: number; total: number };
  noAnswers?: boolean;
  fade?: boolean;
}) => {
  const { name, questionText, input, output, info, answer } = question;

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"90%"}
      p={2}
      flexDirection={"column"}
      sx={{ overflowY: "auto" }}
    >
      <Stack
        display={"flex"}
        alignItems={"center"}
        sx={{
          pt: 4,
          mb: { xs: 0, md: 4 },
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
        <CodeBlock quizInfo={quizInfo} fade={fade}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            p={4}
            textAlign={"left"}
            sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}
          >
            <Typography variant={"body2"} mb={2} sx={{ fontSize: "inherit" }}>
              {questionText}
            </Typography>
            <Typography variant={"body2"} sx={{ fontSize: "inherit" }}>
              input: {input}
            </Typography>
            <Typography variant={"body2"} sx={{ fontSize: "inherit" }}>
              output: {output}
            </Typography>
            <Typography variant={"body2"} sx={{ fontSize: "inherit" }}>
              info: {info}
            </Typography>
          </Box>
        </CodeBlock>

        <Box sx={{ display: { xs: "none", md: "block" } }}></Box>
      </Stack>
      {!noAnswers && (
        <>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Box>
          <Box>
            <AnswerSet
              correct={answer}
              questionName={name}
              nextOnClick={() => {
                nextQuestion();
                window?.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Question;
