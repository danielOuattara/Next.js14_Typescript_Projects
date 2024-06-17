"use client";

import { Provider } from "react-redux";
import store from "./../store";

type TypeProps = {
  readonly children: React.ReactNode;
};

export default function StoreProvider({ children }: TypeProps) {
  return <Provider store={store}>{children}</Provider>;
}
