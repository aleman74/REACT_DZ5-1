import './App.css';
import Card from "./components/Card";

function App() {
/*
    const div_style = {
        width: '18rem'
    };

    const img_style = {
        width: '18rem'
    };
*/
    const title = 'Card title';
    const text = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
    const img = 'https://dobrovdome.ru/assets/uploads/projects/as-2075/as-2075.jpg';
    const img2 = '';

    return (
        <>
            <Card title={title} text={text} img={img}>
                <img src={img} className="img_style" />
            </Card>
            <Card title={title} text={text} img={img2}>
                <img src={img2} className="img_style" />
            </Card>
        </>
    );
}

export default App;
