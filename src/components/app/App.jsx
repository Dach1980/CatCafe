import PageWrapper from '../layout/page-wrapper/page-wrapper.jsx'
import './Style.css'
import starList from '../../mocks/starList.jsx'

function App() {
  return (
    <PageWrapper stars={starList} />
  )
}

export default App
