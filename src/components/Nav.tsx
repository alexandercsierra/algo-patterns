import { Box, Popover, useTheme } from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Link = ({
  path,
  currentPath,
  label,
  handleClose,
}: {
  path: string;
  currentPath: string;
  label: string;
  handleClose: () => void;
}) => {
  const theme = useTheme();
  return (
    <NavLink
      onClick={handleClose}
      to={path}
      style={{
        borderRadius: "15px",
        textDecoration: "none",
        color:
          currentPath === path
            ? theme.palette.secondary.main
            : theme.palette.text.primary,
        backgroundColor:
          currentPath === path ? theme.palette.primary.main : "transparent",
        fontSize: "1.2rem",
        padding: "5px 0px 5px 10px",
        fontWeight: "700",
      }}
    >
      {label}
    </NavLink>
  );
};

const HamburgerPatty = () => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        width: "20px",
        height: "4px",
        borderRadius: "25px",
        my: "2px",
      }}
    />
  );
};

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const { pathname } = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Box
        onClick={
          anchorEl
            ? () => handleClose()
            : (e: React.MouseEvent<HTMLElement>) => handleClick(e)
        }
        sx={{
          backgroundColor: "primary.main",
          height: "50px",
          width: "50px",
          borderRadius: "100%",
          mr: 3,
          mt: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          cursor: "pointer",
          zIndex: 1000,

          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        <HamburgerPatty />
        <HamburgerPatty />
        <HamburgerPatty />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        sx={{
          mt: 2,
          "& .MuiPaper-root": {
            backgroundColor: "secondary.main",
            border: `2px solid ${theme.palette.primary.main}`,
            p: 2,
            borderRadius: "20px",
            width: "50%",
            minHeight: "10vh",
            display: "flex",
            flexDirection: "column",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Link
          path="/"
          currentPath={pathname}
          label="Home"
          handleClose={handleClose}
        />
        <Link
          path="/quiz"
          currentPath={pathname}
          label="Quiz"
          handleClose={handleClose}
        />
      </Popover>
    </Box>
  );
};

export default Nav;
