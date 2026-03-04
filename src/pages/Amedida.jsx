import Navbar from "../components/Navbar";
import Medida from "../components/Medida";
import Reserva from "../components/Reserva";
import Morfologias from "../components/Morfologias";
import Tela from "../components/Tela";
import Footer from "../components/Footer";

function Amedida() {
  return (
    <div>
        <div>
            <Navbar/>
            <div>
              <Medida/>
            </div>
            <div>
              <Reserva/>
            </div>
            <div>
              <Morfologias/>
            </div>
            <div>
              <Tela/>
            </div>
            <div>
              <Footer/>
            </div>
        </div>
    </div>
  )
}

export default Amedida;