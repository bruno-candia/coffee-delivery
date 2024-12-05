import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pages } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';

const router = createBrowserRouter(pages, {
  future: {
    v7_startTransition: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
