import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {RankMyCatApp} from './app/rank-my-cat';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

bootstrap(RankMyCatApp, [
    ROUTER_PROVIDERS,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://rank-my-cat.firebaseio.com/')
]);
