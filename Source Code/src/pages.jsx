import './pages.css'
import Lesson1 from './Lesson1/Basic.jsx'
import Lesson2 from './Lesson2/varibleInHTML.jsx'
import Lesson3 from './Lesson3/sendingPropsToComponents.jsx'
import Button from './Lesson3/CSS_Module.jsx'
import Lesson4 from './Lesson4/ConditionalRendering.jsx'
import Lesson5 from './Lesson5/RenderingList.jsx'
import Lesson6 from './Lesson6/Buttons.jsx'
import Lesson7 from './Lesson7/useState.jsx'
import Lesson8 from './Lesson8/colorPicker.jsx'
import Lesson9 from './Lesson9/ToDoList.jsx'
import Lesson10 from './Lesson10/useEffect.jsx'
import Lesson11 from './Lesson11/useContext.jsx'

function Page(){
    return(
        <>
        <div>
            <h1>React Practice</h1>
            <p>This is the index page which will hold all the different lesson in one place. But since I don't know React Routing. Im unable to do that as of n ow</p>
        </div>
            <Lesson1/>
            <Lesson2/>
            <Button/>
            <Lesson3/>
            <Lesson4/>
            <Lesson5/>
            <Lesson6/>
            <Lesson7/>
            <Lesson8/>
            <Lesson9/>
            <Lesson10/>
            <Lesson11/>
        <div>
        </div>
        </>
    );
}

/*function Page(){
    return(
        <>
        <div>
            <h1>React Practice</h1>
            <p>This is the index page which will hold all the different lesson in one place. But since I don't know React Routing. Im unable to do that as of n ow</p>
        </div>
            <Lesson9/>
        <div>
        </div>
        </>
    );
}*/

export default Page;