import Navbar from "./components/Navbar";
import {MovieProvider} from "./context/movie/MovieContext";
import Content from "./components/Content";
function App() {




  return (
      <MovieProvider>
      <div className="justify-between h-screen">
          <Navbar/>
          <main className='mx-auto my-auto px-3 pb-12 container'>
          <div>
              <Content/>
          </div>


          </main>
      </div>

      </MovieProvider>
  );
}

export default App;
