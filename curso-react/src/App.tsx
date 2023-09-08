import {BrowserRouter} from  'react-router-dom';
import {Footer} from "./components/Footer.tsx";
import {AppRoutes} from "./routes";
import {H1red} from "./components/H1red.tsx";
import {Events} from "./components/Events.tsx";
import {Challenge} from "./components/Challenge.tsx";
function App() {

  return (
      <BrowserRouter>
          <AppRoutes />
          <H1red />
          <Events />
          <Challenge />
          <Footer />
      </BrowserRouter>

  )
}

export default App
