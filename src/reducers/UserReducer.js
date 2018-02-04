function update(state, payload) {
    console.log(state, payload)
    return state.id !== payload.id ? state : payload;
}
const reducer = (state = { data: [], FilterList: [] }, action) => {
    switch (action.type) {
        case 'LOAD_USER':
        debugger
            return { data: action.data, FilterList: action.data };

        case 'DELETE_USER': {
            return {
                ...state, data: state.data.filter(c => c.id !== action.userId),
                FilterList: state.FilterList.filter(c => c.id !== action.userId)
            };
        }

        case 'ADD_USER': {
            return {
                data: [...state.data, action.payload],
                FilterList: [...state.FilterList, action.payload]
            };
        }

        case 'UPDATE_USER': {
            return {
                data: [...state.data.map((state) => update(state, action.payload))],
                FilterList: [...state.FilterList.map((state) => update(state, action.payload))]
            };
        }

        case 'SEARCH_USER': {
            return { ...state, FilterList: state.FilterList.filter(c => c.name.toLowerCase().substr(0, action.payload.length) === action.payload.toLowerCase())};
        }

        case 'REFRESH_USER': {
            return { ...state, FilterList: state.data }
        }
        default:
            return state;
    }
}
export default reducer