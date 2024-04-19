import { atom } from "recoil";
import { localPersistEffect } from "./atom-effects";

export const isAuthenticatedAtom = atom<boolean>({
  key: "isAuthenticatedAtom",
  default: false,
  effects_UNSTABLE: [localPersistEffect],
});

export const activationTokenAtom = atom({
  key: "activationTokenAtom",
  default: "",
  effects_UNSTABLE: [localPersistEffect],
});
