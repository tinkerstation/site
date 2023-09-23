import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
} from "react-router-dom";
import './styles/index.css'
import { AppRouter } from './pages/router.tsx';
import { CustomThemeProvider } from './common/contexts/ThemeContext';
import { ConsentContextProvider } from './common/contexts/CookiesContext.tsx';
import { LanguageContextProvider } from './common/contexts/LangContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageContextProvider>
    <ConsentContextProvider>
      <CustomThemeProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </CustomThemeProvider>
    </ConsentContextProvider>
  </LanguageContextProvider>,
)
