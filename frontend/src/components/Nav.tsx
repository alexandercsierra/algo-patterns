import { Box, Button, Popover, useTheme, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { links } from "../utils/links";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../redux/slices/authSlice";
import axios from "axios";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const signOut = async () => {
    await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/logout`);
    dispatch(addUser(null));
  };
  return (
    <Button
      onClick={signOut}
      variant={"contained"}
      sx={{
        color: "secondary",
        backgroundColor: "text.primary",
        textTransform: "none",
        fontSize: "1.2rem",
        fontWeight: "bold",
        borderRadius: "25px",
        width: "fit-content",
        px: 4,
        alignSelf: "center",
      }}
    >
      log out
    </Button>
  );
};

// const SignInButton = () => {
//   return (
//     <Button
//       href={`${import.meta.env.VITE_API_URL}/api/auth/login/google`}
//       variant={"contained"}
//       sx={{
//         color: "secondary",
//         backgroundColor: "text.primary",
//         textTransform: "none",
//         fontSize: "1.2rem",
//         fontWeight: "bold",
//         borderRadius: "25px",
//       }}
//     >
//       Sign in with Google
//     </Button>
//   );
// };

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
        width: "19px",
        height: "3px",
        borderRadius: "25px",
        my: "2px",
      }}
    />
  );
};

const Nav = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = useSelector((state: any) => state.auth.user);
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
        alignItems: "center",
        mr: 3,
        mt: 1,
      }}
    >
      {/* {!user && <SignInButton />} */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
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
            height: "35px",
            width: "35px",
            borderRadius: "100%",

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
              maxWidth: "200px",
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
          {user?.photo && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                justifyContent: "center",
              }}
            >
              <img
                src={user.photo}
                style={{
                  borderRadius: "100%",
                  width: "40px",
                  height: "40px",
                  marginRight: "20px",
                }}
              />
              <Typography>{user.name}</Typography>
            </Box>
          )}
          {links.map((link) => {
            return (
              <Link
                key={link.label}
                path={link.path}
                currentPath={pathname}
                label={link.label}
                handleClose={handleClose}
              />
            );
          })}
          {user?._id && <SignOutButton />}
        </Popover>
      </Box>
    </Box>
  );
};

export default Nav;
