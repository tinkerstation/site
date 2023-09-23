import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguageContext } from '../contexts/LangContext';
import ConsentModal from './ConsentModal';
import { darkTheme, getTranslation, languages, lightTheme } from '..';
import {
  Button,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  styled,
  Typography,
} from '@mui/material';
import { GiHamburgerMenu } from "react-icons/gi";
import { DarkMode, LightMode } from '@mui/icons-material';
import { convertPathString } from '../index';
import { Helmet } from 'react-helmet';

const HamMenu = styled(GiHamburgerMenu)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.body2.fontSize,
}));

const Container = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  background: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-around",
  position: "fixed",
  width: "100vw",

}));

const ContainerMenuItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary,
}));
const CustomLink = styled(Link)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary,
  textDecoration: "none",
}));

export const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { Language, toggleLanguage } = useLanguageContext();
  const { darkMode, toggleTheme } = useThemeContext();

  const navigate = useNavigate();
  function handleNavigate(path: string) {
    navigate(path)
    setOpenMenu(false)
  }
  return (
    <React.Fragment>
      <Helmet>
        <meta name="theme-color" content={darkMode ? darkTheme.palette.background.default : lightTheme.palette.background.default} />
      </Helmet>
      <Container >
        <ContainerMenuItem >
          <CustomLink to="/" >
            <Typography variant="h2" sx={{ xs: "h4", sm: "h3", md: "h2", xl: "h1" }}>XenOrbit</Typography>
          </CustomLink>
        </ContainerMenuItem>
        <ContainerMenuItem >

        </ContainerMenuItem>
        <ContainerMenuItem >
          <Button onClick={() => setOpenMenu(!openMenu)}
            style={{
              color: "black",
              width: "max-content",
            }}
          ><HamMenu /></Button>
        </ContainerMenuItem>
      </Container>
      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
      >
        <List>
          {['pages.home', 'pages.blogs', 'pages.aboutUs', 'pages.ourServices', 'pages.contactUs'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleNavigate('/' + convertPathString(text))}>
                <ListItemText primary={getTranslation(Language.code, text)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['pages.termsOfUse', 'pages.privacyPolicy', 'pages.impressum'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleNavigate('/' + convertPathString(text))}>
                <ListItemText primary={getTranslation(Language.code, text)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem >
          <ListItemButton onClick={toggleTheme}>
            <ListItemIcon>
              {darkMode ? <DarkMode /> : <LightMode />}
            </ListItemIcon>
            <ListItemText primary={darkMode ? getTranslation(Language.code, "darkTheme") : getTranslation(Language.code, "lightTheme")} />
          </ListItemButton >
        </ListItem>
        <ListItem >
          <FormControl fullWidth >
            <InputLabel id="language-selector">{getTranslation(Language.code, "language")}</InputLabel>
            <Select
              labelId="language-selector"
              id="language-selector"
              value={Language.code}
              label={getTranslation(Language.code, "language")}
              onChange={(e) => toggleLanguage(e.target.value)}
            >
              {
                languages.map((text, index) => (
                  <MenuItem value={text.code} key={index}>{getTranslation(Language.code, text.name)}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </ListItem>
      </Drawer>
      <ConsentModal />
    </React.Fragment>
  );
}
