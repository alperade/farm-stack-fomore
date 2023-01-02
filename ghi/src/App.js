import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Nav from "./Nav";
import ItineraryForm from "./Features/Itineraries/ItineraryForm";
import EventForm from "./Features/Events/EventForm";
import Itineraries from "./Features/Itineraries/ListItinerary";
import Events from "./Features/Events/ListEvents_playaround";
import ItineraryDetail from "./Features/Itineraries/ItineraryDetail";
import UpdateEventForm from "./Features/Events/UpdateEventForm";
import UpdateItineraryForm from "./Features/Itineraries/UpdateItineraryForm";

function App() {
  return (
    <div className="bg-color">
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/fomore/" element={<Main />} />
            <Route path="/fomore/ItineraryForm" element={<ItineraryForm />} />
            <Route path="/fomore/EventForm" element={<EventForm />} />
            <Route path="/fomore/UpdateEvent" element={<UpdateEventForm />} />
            <Route path="/fomore/Itineraries" element={<Itineraries />} />
            <Route path="/fomore/Events" element={<Events />} />
            <Route path="/fomore/ItineraryDetail" element={<ItineraryDetail />} />
            <Route
              path="/fomore/UpdateItineraryForm"
              element={<UpdateItineraryForm />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
