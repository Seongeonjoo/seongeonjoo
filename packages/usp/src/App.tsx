import { ThemeProvider } from '@mui/material';

import ErrorBoundary from 'shared/ErrorBoundary';
import theme from 'shared/theme';

import Router from './Router';
function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
