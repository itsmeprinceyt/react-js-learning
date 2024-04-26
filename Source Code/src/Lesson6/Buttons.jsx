import './Buttons.css'
import Cat from './cat.png'

function EventHandlers(){
    let count = 0;
    let handleClick = (e)=>  {
        if(count<3)
        {
            count++;
            document.querySelector('.CatPhoto').style.display = "none";
            e.target.textContent = `Click Again | Count: ${count}`;
        }else
        {
            document.querySelector('.CatPhoto').style.display = "block";
            e.target.textContent = `Click Me`;
            count = 0;
        }
    };
    return(
        <>
            <img className="CatPhoto" src={Cat} />
            <button className="button-click-me" onClick={(e)=> {
                handleClick(e)
            }} >Click Me</button>
        </>
    )
}

export default EventHandlers