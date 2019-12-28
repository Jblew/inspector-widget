import { AUTH_CONFIG } from "./auth.config";
import { FirestoreRolesAdapter, firestoreRolesVueAuthLabelsEn } from "firestore-roles-vue-auth/src";
import { RolesConfig } from "./roles.config";

export function constructRolesAdapter(firestore: firebase.firestore.Firestore) {
  return new FirestoreRolesAdapter({
    labels: firestoreRolesVueAuthLabelsEn,
    authProviders: AUTH_CONFIG.providers,
    firestore,
    rolesConfig: RolesConfig,
    roleCheckingIntervalSeconds: {
      whenHasRole: 3600,
      whenDoesNotHaveRole: 10
    },
    basePath: "/"
  });
}
