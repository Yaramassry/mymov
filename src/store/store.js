import {createStore} from 'redux';

const initialState = {
    counter :2
}

const reducers = (state , action) => {
    switch (action.type) {
        case 'INCREMENT' : return {counter : state.counter +1}
        case 'DICREMENT' : return {counter : state.counter -1}
        default : return state ;
    }
}

export default createStore (reducers , initialState);