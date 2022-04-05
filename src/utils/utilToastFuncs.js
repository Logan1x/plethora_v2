import toast from "react-hot-toast";

const { icon, style } = {
  icon: "🛒",
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
  },
};

export const notify = (msg, status, emojitype = null) => {
  if (status === "success") {
    if (emojitype) {
      return toast.success(msg, { icon: emojitype, style });
    } else {
      return toast.success(msg, { style });
    }
  } else {
    return toast.error(msg, { style });
  }
};
