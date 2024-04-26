import './Card.css';
import PropTypes from 'prop-types' // propTypes

function Card({flowername,flowerdescription,colorFlower}){
    return(
        <div className="flower">
            <h1 style={{color: `${colorFlower}`}}>{flowername}</h1>
            <p>{flowerdescription}</p>
        </div>
    );
}

Card.propTypes = { // defining that props should be of certain datatype otherwise show error
    flowerdescription: PropTypes.string,
    flowername: PropTypes.string,
    color: PropTypes.string,
}
Card.defaultProps = { // setting defuault props
    flowerdescription: "Flower",
    flowername: "Flower Name",
    color: "white",
}
export default Card;