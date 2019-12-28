import { RoleKey } from './RoleKey';
import { FIRESTORE_COLLECTIONS } from './firestore-collections';

export const RolesConfig = Object.freeze({
  accountsCollection: FIRESTORE_COLLECTIONS.accounts,
  roleCollectionPrefix: 'role_',
  roleRequestsCollectionPrefix: 'rolereq_',
  roles: {
    [RoleKey.admin]: {
      manages: [RoleKey.viewer],
    },
    [RoleKey.viewer]: {
      manages: [],
    },
  },
});

export default RolesConfig;
