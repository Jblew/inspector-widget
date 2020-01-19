import firebase from 'firebase/app';
import { FIRESTORE_COLLECTIONS } from '../../../../config';

export function getFirebaseSubcollection(col: string) {
  return firebase.firestore().collection(`${FIRESTORE_COLLECTIONS}/${col}`);
}
