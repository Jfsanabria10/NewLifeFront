import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {Navegacion} from "../layouts/Navegacion"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {CitasCreadas} from "../pages/CitasCreadas"
import { CitaDetalle } from '../pages/CitaDetalle';
import "moment/locale/es"
import { Signup } from '../pages/Signup';
import { Provider } from 'react-redux';
import { store } from '../states/store';
import { getAutenticacionToken } from '../connections/helpers/token';
import { Signin } from '../pages/Signin';
import { RutaPrivada } from './RutaPrivada';
import { Miscitas } from '../pages/Miscitas';
import { CrearCita } from '../pages/CrearCita';
import { EditarCita } from '../pages/EditarCita';

getAutenticacionToken()

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navegacion />
        <Routes>
          <Route path='/' element={<CitasCreadas />}/>
          <Route path='/cita/:id' element={<CitaDetalle />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
          <Route element={<RutaPrivada />}>
            <Route path='/miscitas' element={<Miscitas />}/>
            <Route path='/crearcita' element={<CrearCita />}/>
            <Route path='/editarcita/:id' element={<EditarCita />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
