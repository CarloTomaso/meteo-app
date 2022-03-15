
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Home from './screen/Home'
import Details from './screen/Details';
import NotFound from './screen/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details:name" element={<Details />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
