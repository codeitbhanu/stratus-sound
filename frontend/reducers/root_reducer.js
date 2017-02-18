import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import TracksReducer from './tracks_reducer';
import TrackReducer from './track_reducer';
import UserReducer from './user_reducer';
import CurrentTrackReducer from './current_track_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  tracks: TracksReducer,
  track: TrackReducer,
  user: UserReducer,
  currentTrack: CurrentTrackReducer
});

export default RootReducer;