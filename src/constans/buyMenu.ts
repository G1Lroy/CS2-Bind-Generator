import { equipsImg, smgsImg, pistolsImg, riflesImgs, heavysImgs } from "./images";

export const buyMenuEquip = [
  { title: "Flashbang", value: "flashbang", side: "both", img: equipsImg.flash },
  { title: "Smoke", value: "smokegrenade", side: "both", img: equipsImg.smoke },
  { title: "Molotov", value: "molotov;incgrenade", side: "t", img: equipsImg.moly },
  { title: "Incgrenade", value: "incgrenade;molotov", side: "ct", img: equipsImg.moly_ct },
  { title: "HE Grenade", value: "hegrenade", side: "both", img: equipsImg.he },
  { title: "Kevlar Vest", value: "vest", side: "both", img: equipsImg.vest },
  { title: "Kevlar + Helmet", value: "vesthelm", side: "both", img: equipsImg.vestHelmet },
  { title: "Defuse Kit", value: "defuser", side: "ct", img: equipsImg.kit },
];
export const buyMenuPistol = [
  { title: "Glock 18", value: "glock;usp_silencer", side: "t", img: pistolsImg.glock },
  { title: "USP-S", value: "usp_silencer;glock", side: "ct", img: pistolsImg.usp },
  { title: "P2000", value: "hkp2000;glock", side: "ct", img: pistolsImg.p2000 },
  { title: "P250", value: "p250", side: "both", img: pistolsImg.p250 },
  { title: "Five-Seven", value: "fiveseven;buy tec9", side: "ct", img: pistolsImg.fiveseven },
  { title: "Tec-9", value: "tec9;fiveseven", side: "t", img: pistolsImg.tec9 },
  { title: "CZ-75 Auto", value: "cz75a", side: "both", img: pistolsImg.cz75 },
  { title: "Dual Berettas", value: "elite", side: "both", img: pistolsImg.dualBeretas },
  { title: "Desert Eagle", value: "deagle", side: "both", img: pistolsImg.desertEagle },
];
export const buyMenuSmg = [
  { title: "Mac-10", value: "mac10;mp9", side: "t", img: smgsImg.mac10 },
  { title: "Mp-9", value: "mp9;mac10", side: "ct", img: smgsImg.mp9 },
  { title: "Mp-7", value: "mp7", side: "both", img: smgsImg.mp7 },
  { title: "Ump-45", value: "ump45", side: "both", img: smgsImg.ump },
  { title: "MP-5SD", value: "mp5sd", side: "both", img: smgsImg.mp5 },
  { title: "P-90", value: "p90", side: "both", img: smgsImg.p90 },
  { title: "Bizon-19", value: "bizon", side: "both", img: smgsImg.bizon },
];
export const buyMenuRifle = [
  { title: "Galil AR", value: "galilar;famas", side: "t", img: riflesImgs.galil },
  { title: "FAMAS", value: "galilar;famas", side: "ct", img: riflesImgs.famas },
  { title: "AK-47", value: "ak47;m4a1_silence", side: "t", img: riflesImgs.ak47 },
  { title: "M4A4", value: "m4a4;ak47", side: "ct", img: riflesImgs.m4a4 },
  { title: " M4A1-S", value: "m4a1_silence;ak47", side: "ct", img: riflesImgs.m4a1s },
  { title: "SSG 08", value: "ssg08", side: "both", img: riflesImgs.ssg08 },
  { title: "SG553", value: "sg553;aug", side: "t", img: riflesImgs.sg553 },
  { title: "AUG", value: "aug;sg553", side: "ct", img: riflesImgs.aug },
  { title: "AWP", value: "awp", side: "both", img: riflesImgs.awp },
];
export const buyMenuOtherWeapon = [
  { title: "Decoy", value: "decoy", side: "both", img: equipsImg.decoy },
  { title: "Zeus x27", value: "taser", side: "both", img: equipsImg.zeus },
  { title: "R8 Revolver", value: "revolver", side: "both", img: pistolsImg.r8 },
  { title: "NOVA", value: "nova", side: "both", img: heavysImgs.nova },
  { title: "XM1014", value: "xm1014", side: "both", img: heavysImgs.xm1014 },
  { title: "Saved-Off", value: "savedoff;mag7", side: "t", img: heavysImgs.saved },
  { title: "MAG-7", value: "mag7;savedoff", side: "ct", img: heavysImgs.mag7 },
  { title: "SCAR-20", value: "scar20;g3sg1", side: "ct", img: heavysImgs.scar },
  { title: "G3SG1", value: "g3sg1;scar20", side: "t", img: heavysImgs.g3sg1 },
  { title: "NEGEV", value: "negev", side: "both", img: heavysImgs.negev },
  { title: "M249", value: "m249", side: "both", img: heavysImgs.mg249 },
];
