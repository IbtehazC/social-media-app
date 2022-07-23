import { useContext } from "react";
import { createContext } from "react";
import PostStore from "./postStore";

interface Store {
  postStore: PostStore;
}

export const store: Store = {
  postStore: new PostStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
