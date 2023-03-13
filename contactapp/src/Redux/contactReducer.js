const initialState = [
  {
    id: 0,
    name: "Raman",
    number: "123456789",
    email: "r@gmail.com",
  },
  {
    id: 1,
    name: "Sharma",
    number: "123456889",
    email: "s@gmail.com",
  },
];

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;

    case "UPDATE_CONTACT":
        const updateState = state.map(el => el.id === action.payload.id ? action.payload : el)
      
      state = updateState
      return state;

    case 'DELETE_CONTACT':
      const filterContacts = state.filter(el=>el.id !== action.payload && el)
      state = filterContacts
      return state;
    default:
      return state;
  }
};
