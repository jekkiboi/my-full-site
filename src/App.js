import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './config/Routes'
import 'aos/dist/aos.css';

function App() {

  return (
    <div>
      {/* <Header/> */}
      <Header/>
      <Routes/>
      <Footer/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
 

