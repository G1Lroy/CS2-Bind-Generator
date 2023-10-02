export const animationTabs = {
  from: { opacity: 0 },
  enter: { opacity: 1 },
  leave: { opacity: 0 },
  config: { duration: 500 },
};
export const animationCards = {
  transform: "translateX(0%)",
  from: { transform: "translateY(-100%)" },
  config: { duration: 300 },
};
export const mouseBtns = [
  { class: "mouse-button", value: "mouse2", text: null },
  { class: "mouse-button left", value: "mouse1", text: null },
  { class: "mouse-button-wheel", value: "mouse3", text: null },
  { class: "mouse-button-up", value: "mwheelup", text: "↑" },
  { class: "mouse-button-down", value: "mwheeldown", text: "↓" },
  { class: "mouse-button5", value: "mouse5", text: "5" },
  { class: "mouse-button4", value: "mouse4", text: "4" },
];
