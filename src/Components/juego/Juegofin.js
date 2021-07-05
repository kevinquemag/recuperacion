import Cuadrado from "../Cuadrado/Cuadrado";
import "./Juegofin.css";

const Juegofin = ({cuadrados, onClick, turno, Cuadradosganadores }) => {
    
    const crearCuadros = valores => (
        valores.map( valor => (
            <Cuadrado 
            ganador={Cuadradosganadores.includes(valor)}
            turno={turno}
            onClick={() =>onClick(valor)}
            valor={cuadrados[valor]}
            key={ `cuadrado_${valor}`}
            />
        ))
    );
    
    return(
        <div className="juegofin">

        <div className="fila">
        {crearCuadros([0,1,2])}
                </div>
        <div className="fila">
        {crearCuadros([3,4,5])}
                </div>
        <div className="fila">
        {crearCuadros([6,7,8])}
                </div>
        </div>


    );
}

export default Juegofin;