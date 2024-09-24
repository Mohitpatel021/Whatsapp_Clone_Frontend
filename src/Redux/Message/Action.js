import { BASE_API_URL } from "../../Config/api";
import { CREATE_NEW_MESSAGE, GET_ALL_MESSAGE } from "./ActionType";
export const createMessage = (messageData) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/api/messages/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${messageData.token}`,
      },
      body: JSON.stringify(messageData.data),
    });
    const data = await res.json();
    console.log("create message---->", data);
    dispatch({ type: CREATE_NEW_MESSAGE, payload: data });
  } catch (error) {
    console.log("catch error ", error);
  }
};
export const getAllMessages = (requestData) => async (dispatch) => {
  try {
    const res = await fetch(
      `${BASE_API_URL}/api/messages/chat/${requestData.chatId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${requestData.token}`,
        },
      }
    );
    const data = await res.json();
    console.log("get all message", data);
    dispatch({ type: GET_ALL_MESSAGE, payload: data });
  } catch (error) {
    console.log("catch error ", error);
  }
};
