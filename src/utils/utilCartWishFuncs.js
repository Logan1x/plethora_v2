import { notify } from "./utilToastFuncs";

export const updateCartItemQuantity = (data, id, incOrDec) => {
  // if (incOrDec) {
  //   const {_id } = data
  //   incOrDec==="inc"? {
  //       const updatedObj = { _id, quantity:  }
  //   }
  // } else {
  //   return data;
  // }
};

export const cartCheckoutNotify = () => {
  notify("Paisa laya?", "success", "🤨");
};
