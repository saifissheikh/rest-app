import './App.css';
import Sidebar from './shared/sidebar';
import RestDetails from './all-restuarants/rest-details';

function App() {
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-10">
        <RestDetails></RestDetails>
      </div>
    </div>
  );
}

export default App;
