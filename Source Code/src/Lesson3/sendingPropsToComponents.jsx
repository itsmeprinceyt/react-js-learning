import Card from './Card.jsx';
function App() {
 return(
  <>
    <Card
      flowerdescription="Sunflower is a yellow flower"
      flowername="Sunflower"
      colorFlower = "yellow"
    />
    <Card
      flowerdescription="Tulip is a nice flower."
      flowername="Tulip"
      colorFlower="pink"
    />
    <Card
      flowerdescription="The flower of Love"
      flowername="Rose"
      colorFlower="red"
    />
    <Card/>
  </>
 );
}

export default App
