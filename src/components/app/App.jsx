import buyOptions from '../../mocks/buyOptions.jsx';
import gallery from '../../mocks/gallery.jsx';
import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
// import starList from '../../mocks/starList.jsx'
import { GlobalStyle } from "./styles.jsx";

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <PageWrapper stars={starList}>Контент страницы</PageWrapper> */}
      <PageWrapper slides={gallery} buyOptions={buyOptions}/>
    </>
  )
}

export default App
