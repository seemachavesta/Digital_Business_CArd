import Header from './component/Header';
import About from './component/About';
import Interest from './component/Interest';
import Footer from './component/Footer';
import './style.css';

function App() {
  return (
    <div className='container'>
      <div className='card'>
        <Header/>
        <About/>
        <Interest/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default App;
