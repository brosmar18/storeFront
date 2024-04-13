import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Stack,
  Link,
  Box,
  InputBase,
  Button,
  Badge,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Twitter,
  Mail,
  Favorite,
  ShoppingCart,
} from "@mui/icons-material";
import { navLinks } from "../constants";
import { logo } from "../assets";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const BottomToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SocialIcons = styled(Box)({
  display: "flex",
  gap: "16px",
});

const ShopIcons = styled(Box)({
  display: "flex",
  gap: "18px",
});

const LinksContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  justifyContent: "flex-end",
});

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  padding: "12px 16px",
  borderRadius: theme.shape.borderRadius,
  width: "36.25rem",
}));

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        padding: "8px 100px 24px",
        backgroundColor: "black",
      }}
    >
      <Stack spacing={2}>
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
        <BottomToolbar>
          <img src={logo} alt="logo" width={84} height={84} />
          <Box sx={{ display: "flex", gap: "4px" }}>
            <Search>
              <InputBase
                placeholder="What are you looking for?"
                sx={{ width: "100%" }}
              />
            </Search>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#53B3F8", padding: "12px 24px" }}
            >
              Search
            </Button>
          </Box>
          <ShopIcons>
            <Favorite fontSize="large" />
            <Badge badgeContent={4} color="error">
              <ShoppingCart fontSize="large" />
            </Badge>
          </ShopIcons>
        </BottomToolbar>
      </Stack>
    </AppBar>
  );
};

export default Navbar;
