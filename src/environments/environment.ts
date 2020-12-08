// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDi6vPVD39k6xrDZc3TQgLt7H5Wjjh0fbo",
    authDomain: "database-7fdcb.firebaseapp.com",
    databaseURL: "https://database-7fdcb.firebaseio.com",
    projectId: "database-7fdcb",
    storageBucket: "database-7fdcb.appspot.com",
    messagingSenderId: "985111299778",
    appId: "1:985111299778:web:bf369a83dfa7335fe91d5b",
    measurementId: "G-M5FQ7V25TN"
  },
  // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.analytics();
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
