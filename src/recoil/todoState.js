import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const _todoCategory = selector({
  key: "_todoCategory",
  get: ({ get }) => {
    const todos = get(todoState);
    return todos;
  },
});
