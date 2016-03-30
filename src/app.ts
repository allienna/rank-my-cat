import {bootstrap} from 'angular2/platform/browser';
import {RankMyCatApp} from './app/rank-my-cat';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap(RankMyCatApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://rank-my-cat.firebaseio.com/')
]);
