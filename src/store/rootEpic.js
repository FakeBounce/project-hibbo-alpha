// To be able to use Observable.stuff
import 'rxjs';

import { combineEpics } from 'redux-observable';
import { getWebsocketEpic } from 'epic/websocketEpic';

const rootEpic = combineEpics(
    getWebsocketEpic,
);

export default rootEpic;
