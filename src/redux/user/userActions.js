import { UserActionTypes } from "./userTypes";
export const setCurrentUser = payload => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload
});
