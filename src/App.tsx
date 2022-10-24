import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from 'routes';

import { CategoryProvider } from 'contexts/Category';
import { ThemeProvider } from 'contexts/Theme';
import { ToastProvider } from 'contexts/Toast';

import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-circular-progressbar/dist/styles.css';
import '@vime/core/themes/default.css';

export function App() {
  return (
    <ToastProvider>
      <ThemeProvider>
        <CategoryProvider>
          <BrowserRouter>
            <MainRoutes />
          </BrowserRouter>
        </CategoryProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}
