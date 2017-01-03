//if state is undefined, set it to null instead
import { FETCH_WEATHER } from '../actions/index';

//you never mutate state
//instead you return an entire new state object
export default function(state = [], action){
	switch(action.type){
		case FETCH_WEATHER:
			return state.concat([action.payload.data]);
	}
	return state;
}