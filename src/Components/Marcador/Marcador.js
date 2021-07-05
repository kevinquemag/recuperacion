import './Marcador.css';

const ScoreBoard = ({scoreX, scoreO}) => (
    <div className="marcador">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
)

export default ScoreBoard;