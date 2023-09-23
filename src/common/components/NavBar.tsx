import * as React from 'react';
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
} from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';
import { useLanguageContext } from '../contexts/LangContext';
import ConsentModal from './ConsentModal';
import { getTranslation, languages } from '../language';
import { GiHamburgerMenu } from "react-icons/gi";
import { DarkMode, LightMode } from '@mui/icons-material';
import viteLogo from '/vite.svg';


const HamMenu = styled(GiHamburgerMenu)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const Container = styled(Grid)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: theme.spacing(1),
  background: theme.palette.background.default,
  borderRadius: "0px",
  display: "flex",
  justifyContent: "space-around",
}));

const ContainerMenuItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  color: theme.palette.text.primary,
}));

export const NavBar: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { Language, toggleLanguage } = useLanguageContext();
  const { darkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  function handleNavigate(path:string){
    navigate(path)
    setOpenMenu(false)
  }
  return (
    <React.Fragment>
      <Container >
        <ContainerMenuItem >
          <img src={viteLogo} className="logo react" alt="React logo" />
        </ContainerMenuItem>
        <ContainerMenuItem >
          <h1>center</h1>
        </ContainerMenuItem>
        <ContainerMenuItem >
          <Button onClick={() => setOpenMenu(!openMenu)}
            style={{
              color: "black",
              width: "max-content",
            }}
            startIcon={<HamMenu />}
          ></Button>
        </ContainerMenuItem>
      </Container>
      <Drawer
        anchor={"right"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
      >
          <List>
          {['home', 'blogs', 'aboutUs', 'ourServices', 'contactUs'].map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={()=> handleNavigate('/'+text)}>
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
