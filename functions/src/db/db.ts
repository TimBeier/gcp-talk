import admin, {firestore} from "firebase-admin";
import Firestore = firestore.Firestore;

let dbCached: Firestore;
export default function db() {
    if(!dbCached){
        dbCached = admin.firestore();
    }
    return dbCached;
}
