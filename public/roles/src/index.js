const { RolesConfig, FIREBASE_CONFIG } = require('../../../config/dist/config');

const { FirestoreRolesManagerAppUI } = require('firestore-roles-manager-ui');

const config = {
    title: 'Inspector Widget role management',
    firebase: FIREBASE_CONFIG,
    authProviders: ['google.com'],
    roles: RolesConfig,
    basePath: '/roles/',
    menuLinks: [],
};

FirestoreRolesManagerAppUI.mount('#app', config);
