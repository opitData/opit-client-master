import produce, { current } from 'immer';
import createReducer from './reducerUtils';
import { reset } from './appReducers';
import { actions } from '../actions';

const initialState = {
    user: {
        fname: 'ישראל',
        lname: 'ישראלי',
        phone: '0503492444',
        properties: [],
        role: 'admin',
        parkings: [{
            floor: 'מינוס 1',
            number: '15',
        }],
    },
    parkingList: ['1'],
    usersList: [
        {
            _id: 1,
            fname: 'ישראל',
            lname: 'ישראלי',
            carNum: '21e2e23r',
            apartment: '12',
            selected: false
        },
        {
            _id: 2,
            fname: 'דוד',
            lname: 'לוי',
            carNum: '875834984',
            apartment: '2',
            selected: false
        },
        {
            _id: 3,
            fname: 'גדי',
            lname: 'בראון',
            carNum: '21e2e23r',
            apartment: '3',
            selected: false
        },
        {
            _id: 4,
            fname: 'אורי',
            lname: 'שחור',
            carNum: '73458733',
            apartment: '9',
            selected: false
        },
        {
            _id: 5,
            fname: 'עידו',
            lname: 'כץ',
            carNum: '875834984',
            apartment: '2',
            selected: false
        },
        {
            _id: 6,
            fname: 'נחמן',
            lname: 'לב',
            carNum: '234894398',
            apartment: '3',
            selected: false
        },
        {
            _id: 7,
            fname: 'ישראל',
            lname: 'ישראלי',
            carNum: '21e2e23r',
            apartment: '12',
            selected: false
        },
        {
            _id: 8,
            fname: 'דוד',
            lname: 'לוי',
            carNum: '875834984',
            apartment: '2',
            selected: false
        },
        {
            _id: 9,
            fname: 'גדי',
            lname: 'בראון',
            carNum: '21e2e23r',
            apartment: '3',
            selected: false
        },
        {
            _id: 10,
            fname: 'אורי',
            lname: 'שחור',
            carNum: '73458733',
            apartment: '9',
            selected: false
        },
        {
            _id: 11,
            fname: 'עידו',
            lname: 'כץ',
            carNum: '875834984',
            apartment: '2',
            selected: false
        },
        {
            _id: 12,
            fname: 'נחמן',
            lname: 'לב',
            carNum: '234894398',
            apartment: '3',
            selected: false
        },
    ],
    numUsersToDelete: 0,
    selectedUsers: [],
    selectedUser: {},
}

const user = {
    setSelectedUser(state, action) {
        state.numUsersToDelete = 0;
        state.usersList.forEach(user => {
            if (user._id == action.payload)
                user.selected = !user.selected;
            if (user.selected == true)
                state.numUsersToDelete++;
        })
    },
    selectAll(state, action) {
        state.usersList.forEach(user => {
            user.selected = action.payload
        });
        state.numUsersToDelete = action.payload == true ? state.usersList.length : 0;
    },
    deleteUsers(state) {
        state.usersList.filter(user => {
            user.selected == false
        })
        // state.usersList = state.usersList.filter(user => {
        //     if (user.selected == false)
        //         return user
        // })
    }
}

export default produce((state, action) =>
    createReducer(state, action, user), initialState);