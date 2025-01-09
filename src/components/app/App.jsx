import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
import starList from '../../mocks/starList.jsx'
import { GlobalStyle } from "./styles.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList}>Контент страницы</PageWrapper>
    </>
  )
}

export default App
