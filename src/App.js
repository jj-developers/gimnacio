import logo from './logo.svg';
import './App.css';
import EncabezadoComponente from './componentes/EncabezadoComponente';
import PieComponente from './componentes/PieComponente';
import MembresiaComponente from './componentes/MembresiaComponente';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import FormularioMiembroComponente from './componentes/FormularioMiembroComponente';
function App() {
  return (
    <div>



          <BrowserRouter>

          <EncabezadoComponente/>

<div className='container'>

<Routes>

<Route exact path="/" element={<MembresiaComponente Component />}></Route> 
<Route path="/miembros" element={<MembresiaComponente Component />}></Route>
<Route path="/form-miembro" element={<FormularioMiembroComponente Component />}></Route>
<Route path="/editar-miembro/:idMiembro" element={<FormularioMiembroComponente Component />}></Route>


</Routes>

</div>

<PieComponente/>

</BrowserRouter>
    </div>
  )
  
}

export default App;
