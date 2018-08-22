import { BUY, EAT } from '../actions';

// export default function amount(state = { amount: 0 }, action) {
//   switch (action.type) {
//     case BUY:
//       return Object.assign({}, state, { amount: state.amount + action.data });
//     case EAT:
//       return Object.assign({}, state, (state.amount > action.data)
//         ? { amount: state.amount - action.data }
//         : { amount: 0 });
//     default:
//       return Object.assign({}, state);
//   }
// }

export default function amount(value = 0, action) {
  switch (action.type) {
    case BUY:
      return value + action.data;
    case EAT:
      return (value > action.data) ? value - action.data : 0;
    default:
      return value;
  }
}
