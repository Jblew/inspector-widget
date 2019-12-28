import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

import { FIREBASE_CONFIG } from '../../../../config/firebase.config';

export function constructFirebaseApp() {
  return firebase.initializeApp(FIREBASE_CONFIG);
}
