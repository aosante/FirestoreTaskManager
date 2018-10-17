// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCegJVh5SmaUnFDfx5JPhPF2qfD3WB6CkI",
    authDomain: "fs-task-manager.firebaseapp.com",
    databaseURL: "https://fs-task-manager.firebaseio.com",
    projectId: "fs-task-manager",
    storageBucket: "fs-task-manager.appspot.com",
    messagingSenderId: "35097990551"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
