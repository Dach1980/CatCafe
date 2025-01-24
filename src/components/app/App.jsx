import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import buyOptions from '../../mocks/buyOptions.jsx';
import gallery from '../../mocks/gallery.jsx';
import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
import { GlobalStyle } from "./styles.jsx";
import { AppRoute } from '../../const.jsx';
import starList from '../../mocks/starList.jsx';
import MainPage from '../pages/main-page/main-page.jsx';
import BuyPage from '../pages/buy-page/buy-page.jsx';
import ScrollTop from '../ui/scroll-top/scroll-top.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <ScrollTop/>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.BUY.replace(AppRoute.MAIN, "")}
              element={<BuyPage slides={gallery} buyOptions={buyOptions} />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
