import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { pages } from './Router';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global';
import { CartContextProvider } from './context/CartProvider';

const router = createBrowserRouter(pages, {
  future: {
    v7_startTransition: true,
  },
});

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
