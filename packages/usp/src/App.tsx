import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from 'shared/ErrorBoundary';
import theme from 'shared/theme';
import DynamicRouter from './DynamicRouter';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DynamicRouter />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
