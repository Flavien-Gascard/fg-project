import './App.scss';
import { About, Footer, Header, Skills, Portfolio } from './containers';
import { Navbar } from './components';
import Experience from './containers/Experience/Experience';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}
export default App;