import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import PictureList from './components/PictureList/PictureList';
import PictureDetails from './components/PicureDetails/PictureDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {/* Home route  */}
              <Route path="/" element={<PictureList/>} />
              {/* Dynamic Route  */}
              <Route path="/picture/:id" element={<PictureDetails/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
