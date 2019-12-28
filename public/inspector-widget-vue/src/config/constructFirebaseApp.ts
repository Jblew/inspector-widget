import * as firebase from "firebase/app";
import { FIREBASE_CONFIG } from "./firebase.config";

export function constructFirebaseApp() {
  return firebase.initializeApp(FIREBASE_CONFIG);
}
