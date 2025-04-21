import { Button } from "@mui/material";

const NextButton = ({
  label,
  onClick,
  disabled = false,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <Button
      disabled={disabled}
      sx={{
        "&:focus": {
          outline: "none",
        },
        "&:disabled": {
          background: "grey",
          color: "secondary.main",
        },
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

export default NextButton;
