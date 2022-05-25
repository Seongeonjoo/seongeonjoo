import {LicenseInfo} from "@mui/x-license-pro";
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "react-query";
import ErrorBoundary from 'shared/ErrorBoundary';
import theme from 'shared/theme';
import DynamicRouter from './DynamicRouter';
LicenseInfo.setLicenseKey(`${process.env.REACT_APP_X_LICENSE_PRO}`);
const queryClient = new QueryClient({
  // defaultOptions: {
    //.. TODO .....
    // queries: {
    //   refetchOnMount: false,
    //   refetchOnReconnect: false,
    //   refetchOnWindowFocus: false,
    // }
  // }
});

function App() {
/* TODO.........START............*/
  // const {setDefaultLayout, setUrl, baseURL} = useConfigStore();
  // useEffect(() => {
  //   setDefaultLayout('adminLayout')
  //   setUrl("http://172.30.1.85:8082")
  // }, [])
/* TODO.........END............*/
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <DynamicRouter />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
