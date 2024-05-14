
import NavBar from './components/NavBar';
import About from './pages/About';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {
  // Switch statement to define our paths manually
  let component
  switch (window.location.pathname) {
    case "/projects": component = <Projects />
      break
    case "/about": component = <About />
      break
    case "/": component = <Home />
      break
    default: component = <Home />

  }
  return (
    <>
      <NavBar />
      <div className="container">{component}</div>
    </>
  );
}

export default App;
