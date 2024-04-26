/*function List()
{
    const Foods = [{id: 1,name: "Apple", quantity: 5},
                {id: 2, name: "Banana", quantity: 45},
                {id: 3, name: "Kiwi", quantity: 25},
                {id: 4, name: "Watermelon", quantity: 52},
                {id: 5, name: "Pineapple", quantity: 2}];
    const ListFoods = Foods.map(fruit => <li key={fruit.id}>{fruit.name} | Currently in stock: {fruit.quantity}</li>)
    return (
        <ol>
            {ListFoods}
        </ol>
    );
}

export default List
*/
import PropTypes from 'prop-types'
function List(props)
{
    const category = props.category;
    const itemList = props.items;
    const ListFoods = itemList.map(fruit => <li key={fruit.id}>{fruit.name} | Currently in stock: {fruit.quantity}</li>)
    return (
        <>
        <h1>List of {category}</h1>
            <ol>
                {ListFoods}
            </ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                quantity: PropTypes.number,})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List