import { Box } from "@mui/material";

const ProgressBar = ({ currQ, total }: { currQ: number; total: number }) => {
  const progressPercentage = (currQ / total) * 100;
  return (
    <Box
      sx={{
        width: "80%",
        height: "50px",
        display: "flex",
        jusitfyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: `calc(${progressPercentage}% - 10px) `,
          borderRadius: "25px",
          height: "15%",
          backgroundColor: "#c361ff",
          transition: "width 0.5s ease-in-out",
          position: "absolute",
          left: 6,
          top: 18,
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          width: `${progressPercentage}%`,
          borderRadius: "25px",
          height: "50%",
          backgroundColor: "#9859bf",
          transition: "width 0.5s ease-in-out",
          position: "absolute",
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          width: "100%",
          borderRadius: "25px",
          height: "50%",
          backgroundColor: "#494949",
          transition: "width 0.5s ease-in-out",
          position: "absolute",
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default ProgressBar;
