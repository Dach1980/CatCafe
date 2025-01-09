import logo from "../../../assets/logo.svg"
import { Text, StyledLogo } from "./styles";

function Logo() {
    return (
        <StyledLogo href="/">
            <img src={logo} alt="Логотип" />
            <Text>Котокафе</Text>
        </StyledLogo>
    )
}

export default Logo