import { RoleKey } from "./RoleKey";
import { FIRESTORE_KEYS } from "./firestore-keys";

export const RolesConfig = Object.freeze({
  accountsCollection: FIRESTORE_KEYS.accounts,
  roleCollectionPrefix: "role_",
  roleRequestsCollectionPrefix: "rolereq_",
  roles: {
    [RoleKey.admin]: {
      manages: [RoleKey.viewer]
    }
  }
});

export default RolesConfig;
