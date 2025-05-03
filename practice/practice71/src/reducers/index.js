import {ADD} from '../actions';
import {combineReducers} from 'redux';

const initState = {
    str: 'react',
};

//state 변수에 initState 값이 할당
const data = (state = initState, action) => {
    //actions.type : add 함수에서 반환된 type 변수값 ADD를 가져옴
    switch(action.type) {
        case ADD:
            // eslint-disable-next-line no-sequences
            return state, {
                //actions.type이 ADD인 경우
                //state 변수 str에 200을 붙임
                //반환된 값은 data에 할당
                str: state.str + '200'
            };
        default:
            return state;
    }
};

const App = combineReducers({
    data
});

export default App;