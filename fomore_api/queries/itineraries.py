from bson.objectid import ObjectId
from typing import List
from .client import Queries
from models import ItineraryIn, ItineraryOut, Event, EventIn

class ItineraryQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "itineraries"

    def create(self, itinerary: ItineraryIn) -> ItineraryOut:
        props = itinerary.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ItineraryOut(**props)

    def delete(self, id: str):
        self.collection.delete_one({
            "_id": ObjectId(id)
            })

    def get_one(self, id: str):
        itinerary = self.collection.find_one({"_id": ObjectId(id)})
        itinerary["id"] = str(itinerary["_id"])
        return ItineraryOut(**itinerary)



    def get_all(self) -> List[ItineraryOut]:
        result = self.collection.aggregate(
            [
                {
                    "$lookup": {
                        "from": "events",
                        "localField": "_id",
                        "foreignField": "event_id",
                        "as": "events",
                    }
                },
                {"$sort": {"name": 1}},
            ]
        )
        itineraryPropsList = list(result)
        for itineraryProps in itineraryPropsList:
            itineraryProps["id"] = str(itineraryProps["_id"])
            itineraryProps["events"] = [
                str(props["account_id"]) for props in itineraryProps["events"]
            ]
        return [ItineraryOut(**itinerary) for itinerary in itineraryPropsList]
