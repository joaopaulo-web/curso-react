import {BrowserRouter} from  'react-router-dom';
import {Footer} from "./components/Footer.tsx";
import {AppRoutes} from "./routes";
function App() {

  return (
      <BrowserRouter>
          <AppRoutes />
          <Footer />
      </BrowserRouter>
  )
}

export default App
