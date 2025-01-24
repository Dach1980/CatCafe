import { useLocation } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { AppRoute } from "../../../const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";

// Логотип сайта с названием
function Logo() {
    const {pathname} = useLocation();
    return pathname === AppRoute.MAIN ? (
        <StyledLogoMainPage>
            <img src={logo} alt="Логотип" />
            <Text>Котокафе</Text>
        </StyledLogoMainPage>
    ) : (
        <StyledLogo to={AppRoute.MAIN}>
            <img src={logo} alt="Логотип" />
            <Text>Котокафе</Text>
        </StyledLogo>
    );
}

export default Logo