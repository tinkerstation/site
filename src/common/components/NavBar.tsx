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
import { DarkMode, LightMode } from '@mui/icons-material';
import { convertPathString } from '../index';
import { Helmet } from 'react-helmet';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import ClearIcon from '@mui/icons-material/Clear';

const Container = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  background: "inherit",
  display: "flex",
  justifyContent: "space-between",
  position:"absolute",
  width: "100vw",
  zIndex: "110",
}));

const ContainerMenuItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary,
}));

const CustomLink = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

interface NavBarProps {
  isHome?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({isHome}) => {
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
            <Typography variant="h2" style={{ color: isHome ? "white":"inherit" }}>XenOrBit</Typography>
          </CustomLink>
        </ContainerMenuItem>

        <ContainerMenuItem >
          <Button onClick={() => setOpenMenu(!openMenu)} style={{ color: isHome ? "white":"inherit" }}><DensityMediumIcon /></Button>
        </ContainerMenuItem>
      </Container>
      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
      >
        <ListItem disablePadding >
          <ListItemButton onClick={()=>setOpenMenu(!openMenu)}>
            <ListItemIcon>
              <ClearIcon/>
            </ListItemIcon>
          </ListItemButton >
        </ListItem>
        <Divider />
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
              {darkMode ? <DarkMode /> : <LightMode style={{ color: "#ffd452" }} />}
            </ListItemIcon>
          </ListItemButton >
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
