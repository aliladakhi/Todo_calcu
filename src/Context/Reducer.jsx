
export default function dataReducer(state, action) {
  let newData;
  switch (action.type) {
    case "ADD_TASK":
      newData = [...state, action.payload];
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;

    case "DEL_TASK":
      newData = [...state];
      newData.splice(action.payload, 1);
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;

    case "CLEAR_TASK":
      newData = [];
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;

    default:
      return state;
  }
}