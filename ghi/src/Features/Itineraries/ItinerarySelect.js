import { useGetItinerariesQuery } from "../../app/itineraryApi";
import Form from "react-bootstrap/Form";
import { updateItinerary } from "../../app/itinerarySlice";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateSearch } from "../../app/searchSlice";
import { useSelector } from "react-redux";


function ItinerarySelect() {
  let loc = useSelector((state) => state.search.location);
  let [changed, setChanged] = useState(false);
  let id = ''
  if (changed != false) {
    id = changed.slice(0, 24)
    loc = changed.slice(25)
  }
  const dispatch = useDispatch();
  const { data, isLoading } = useGetItinerariesQuery();

  useEffect(() => {
    const actionId = updateItinerary({ itineraryId: id });
    dispatch(actionId);
    const actionLocation = updateSearch({ location: loc })
    dispatch(actionLocation);
  }, [changed]);


  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  // if (changed !== false) {
  //   const action = updateItinerary({ itineraryId: changed });
  //   dispatch(action);
  //   setChanged(false);
  // }

  return (
    <div>
      <Form.Select id="selectid" onChange={(e) => setChanged(e.target.value)}>
        <option>Select an Itinerary</option>
        {data.itineraries.map((itinerary) => {
          return (
            <option value={[itinerary.id, itinerary.location]} href={itinerary.location} key={itinerary.id}>
              {itinerary.name}
            </option>
          );
        })}
        ;
      </Form.Select>
    </div>
  );
}

export default ItinerarySelect;
