import Home from "./page/Home";
import { Route, Routes } from "react-router-dom";
import CreateMovie from "./page/Create";
import PopularMovie from "./page/NowPlaying";
import NowPlaying from "./page/Popular";
import TopRated from "./page/TopRated";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>  
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page/create" element={<CreateMovie />} />
          <Route path="/page/popular" element={<PopularMovie />} />
          <Route path="/page/now" element={<NowPlaying />} />
          <Route path="/page/top" element={<TopRated />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;