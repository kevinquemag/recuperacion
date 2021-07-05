import { useState } from 'react';
import './App.css';
import Juegofin from './Components/juego/Juegofin';
import ScoreBoard from './Components/Marcador/Marcador'

const hacks = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

 
const App = () => {

  const [turno, setTurno] = useState('X');
  const [cuadrados, setCuadrados] = useState(Array(9).fill(null));
  const [Cuadradosganadores, setCuadradosganadores] = useState([]);
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });


  const reiniciar = () =>{
    setTurno('X');
    setCuadrados(Array(9).fill(null));
    setCuadradosganadores([]);

  }

const ganador = newcuadrados =>{
  for(let i=0; i < hacks.length; i++){
    const [a,b,c] = hacks[i];
    if(newcuadrados[a] && newcuadrados[a] === newcuadrados[b] && newcuadrados[a] === newcuadrados[c] ){
      juegoterminado(newcuadrados[a] ,hacks[i]);

      //ganaste papu
      return

    }
  }

  if(!newcuadrados.includes(null)){
    juegoterminado(null, Array.from(Array(10).keys()));
    //empate
    return
  }

  setTurno(turno === 'X' ? 'O' : 'X');
}

const handleClick = cuadrado => {
  let newCuadrado = [...cuadrados];
  newCuadrado.splice(cuadrado, 1, turno);
  setCuadrados(newCuadrado);
  ganador(newCuadrado)
}

const juegoterminado =(resultado, hacks) => {
  setTurno(null);
  if(resultado !== null ){
    setScore({
      ...score,
      [resultado]: score[resultado]+1,
    })
  }

  setCuadradosganadores(hacks);
  setTimeout(reiniciar,2000);

 

}

  return (
    <div className="Contenedor">
      <Juegofin Cuadradosganadores={Cuadradosganadores} turno={turno} cuadrados={cuadrados} onClick={handleClick} />
      <ScoreBoard scoreO={score.O} scoreX={score.X}/>
    </div>
  );
}

export default App;
