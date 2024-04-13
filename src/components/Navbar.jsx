import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Stack,
  Link,
  Box,
} from "@mui/material";
import { Facebook, LinkedIn, Twitter, Mail } from "@mui/icons-material";
import { navLinks } from "../constants";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SocialIcons = styled(Box)({
  display: "flex",
  gap: "16px",
});
const LinksContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "flex-end",
});

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Stack
        sx={{
          padding: "8px 100px",
          backgroundColor: "black",
        }}
      >
        <StyledToolbar>
          <SocialIcons>
            <Facebook fontSize="small" />
            <LinkedIn fontSize="small" />
            <Twitter fontSize="small" />
            <Mail fontSize="small" />
          </SocialIcons>
          <LinksContainer>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.route}
                color="primary"
                underline="none"
                sx={{
                  fontSize: "16px",
                  color: "#f1f1f1",
                  fontWeight: "500",
                }}
              >
                {link.label}
              </Link>
            ))}
          </LinksContainer>
        </StyledToolbar>
        <StyledToolbar></StyledToolbar>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
