import * as firebase from "firebase/app";
import { FIREBASE_CONFIG } from "../../../../config/firebase.config";

export function constructFirebaseApp() {
  return firebase.initializeApp(FIREBASE_CONFIG);
}
