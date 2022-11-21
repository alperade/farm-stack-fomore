import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./ItineraryForm";
import RestaurantList from "./searchEvent";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/ItineraryForm" element={<ItineraryForm />} />
          <Route path="/searchEvent" element={<RestaurantList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
