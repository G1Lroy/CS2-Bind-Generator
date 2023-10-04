import { otherBindsImg } from "./images";

export const animationCards = {
  opacity: 1,
  from: { opacity: 0 },
  config: { duration: 600 },
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
export const otherBinds = [
  {
    action: "Drop Bomb",
    text: ['alias "+dropc4" "slot5"', 'alias "-dropc4" "drop"', `bind "_" "+dropc4;"`],
    img: otherBindsImg.dropBomb,
  },
  { action: "ToggleMuteAll", text: [`bind "_" "toggle voice_modenable 1 0"`], img: otherBindsImg.mute },
  {
    action: "Jump Throw",
    text: [
      'alias "+bish" "+jump"',
      'alias "+bash" "-attack; -attack2"',
      'alias "+bosh" "-jump"',
      `bind "_" "+bish; +bash; +bosh"`,
    ],
    img: otherBindsImg.jumpThrow,
  },
  {
    action: "Scale Radar",
    text: [`bind "_" "incrementvar cl_radar_scale 0.25 1 0.75"`],
    img: otherBindsImg.radar,
  },
  {
    action: "Jump+control",
    text: ['alias +jumpduck "+duck; +jump"', 'alias -jumpduck "-duck; -jump"', 'bind "_" "+jumpduck"'],
    img: otherBindsImg.jumpCrl,
  },
];
