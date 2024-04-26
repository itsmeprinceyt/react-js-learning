import List from './List.jsx'

function RenderingList(){ 

    const Foods = [{id: 1,name: "Apple", quantity: 5},
                {id: 2, name: "Banana", quantity: 45},
                {id: 3, name: "Kiwi", quantity: 25},
                {id: 4, name: "Watermelon", quantity: 52},
                {id: 5, name: "Pineapple", quantity: 2}];

    return (
        <>
            <List items={Foods} category="Fruits"/>
        </>
    )
}

export default RenderingList