import { BrowserRouter } from "react-router";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
