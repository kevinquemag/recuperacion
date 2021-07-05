import './Cuadrado.css'
import classNames from 'classnames';

const Cuadrado = ({ valor, onClick, turno, ganador }) => {

    const handleClick = () =>{
        (turno !== null && valor === null) && onClick();
    }

    let clasescuadrados = classNames({
        cuadrado: true,
        [`cuadrado--${valor}`]: valor !== null,
        ganador: ganador,
    });

    return (
        <div className={clasescuadrados} onClick={() =>handleClick()}>



        </div>
    )
}

export default Cuadrado;