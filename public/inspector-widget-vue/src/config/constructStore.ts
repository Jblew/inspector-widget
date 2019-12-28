import Vuex, { ActionHandler, Store as VuexStore } from 'vuex';
import { FirestoreRolesAdapter } from 'firestore-roles-vue-auth/src';
import { RolesAuthModule } from 'firestore-roles-vuex-module';
import { NotificationsModule, NotificationsModuleImpl } from 'vuex-notifications-module';
import { AccountRecord } from 'firestore-roles';
import { RoleKey } from './roles.config';

export function constructStore(
  rolesAdapter: FirestoreRolesAdapter,
  firebaseAuth: firebase.auth.Auth,
) {
  let store: any;

  function constructAuthModule(): any {
    return rolesAdapter.constructAuthModule(
      {
        onAuthenticated: (account: AccountRecord) => {
          RolesAuthModule.Actions.CheckRole.dispatch(store.dispatch, RoleKey.viewer);
        },
        onNotAuthenticated: () => {
          /* */
        },
        onError: (message: string) => NotificationsModule.Actions.ShowNotification.dispatch(
                        // eslint-disable-line
          store.dispatch,
          {
            message,
            timeoutMs: 5000,
            params: { color: 'red' },
          },
        ),
      },
      firebaseAuth,
    );
  }

  const modules = {
    [RolesAuthModule.modulePathName]: constructAuthModule(),
    [NotificationsModule.modulePathName]: NotificationsModuleImpl.module,
  };
  store = new Vuex.Store({
    modules,
  });

  return store;
}
