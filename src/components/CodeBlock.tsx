import { Box } from "@mui/material";

const dark = "#323232";
const light = "#494949";

const CodeBlock = ({ children }: { children: any }) => {
  return (
    <Box
      sx={{
        width: "90%",
      }}
    >
      <Box
        sx={{
          background: light,
          height: "50px",
          width: "100%",
          borderTopLeftRadius: "25px",
          borderTopRightRadius: "25px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            background: "white",
            height: "30px",
            width: "30px",
            borderRadius: "25px",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          background: dark,
          minHeight: "200px",
          width: "100%",
          borderBottomLeftRadius: "25px",
          borderBottomRightRadius: "25px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default CodeBlock;
