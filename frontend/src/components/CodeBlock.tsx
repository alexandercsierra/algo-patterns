import { Box, Typography, Button } from "@mui/material";

const dark = "#323232";
const light = "#494949";

const CodeBlock = ({
  children,
  allowCopy = false,
  quizInfo,
}: {
  children: React.ReactNode;
  allowCopy?: boolean;
  quizInfo?: { currQ: number; total: number };
}) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: light,
          height: "30px",
          width: "100%",
          boxSizing: "border-box",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
        }}
      >
        <Typography sx={{ fontWeight: "800", color: "primary.main" }}>
          {`${quizInfo?.currQ} / ${quizInfo?.total}`}
        </Typography>
        {allowCopy && (
          <Button
            sx={{
              background: "white",
              height: "fit-content",
              borderRadius: "25px",
              mt: 1,
              mr: 2,
            }}
          >
            <Typography
              color={"secondary"}
              variant={"body1"}
              sx={{
                fontWeight: "800",
                textTransform: "lowercase",
                fontSize: ".875rem",
                py: 0.5,
              }}
            >
              copy
            </Typography>
          </Button>
        )}
      </Box>
      <Box
        sx={{
          background: dark,
          minHeight: "200px",
          width: "100%",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CodeBlock;
