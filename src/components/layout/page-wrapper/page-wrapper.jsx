import Header from "../header/header"
import Footer from "../footer/footer"
// import MainPage from "../../pages/main-page/main-page"
import { Main } from "./styles";
import BuyPage from "../../pages/buy-page/buy-page";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
    return (
        <>
            <Header />
            <Main>
                {/* <MainPage {...prop} /> */}
                <BuyPage {...prop} />
            </Main>
            <Footer />
        </>
    );
}

export default PageWrapper