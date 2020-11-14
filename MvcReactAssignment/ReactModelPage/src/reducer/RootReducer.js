const initState = {
    locationList: ['Mumbai', 'Pune', 'Navi Mumbai', 'Alwar', 'Goa', 'Chandigarh'],
    selectedLocation : 'Alwar'
}

export function RootReducer(state = initState, action) 
{
    if (action.type === "UPDATE_CITY") 
    {
        const newState = 
        {
            ...state,
            selectedLocation : action.selectedLocation
        };
        return newState;
    }
    return state;
}
