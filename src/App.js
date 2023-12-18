import './App.css';
import Header from './Components/Header';
import ImageSlider from './Components/ImageSlider'

function App() {
  return (
    <div className="App"> 
      <Header />  {/*added App components to display in browser*/}
      <ImageSlider/>  
    </div>
  );
}

export default App;
