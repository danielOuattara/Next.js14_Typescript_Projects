"use client";

import React from "react";
import store from "./store";
import { Provider } from "react-redux";

type TypeProps = {
  readonly children: React.ReactNode;
};

export default function StoreProvider({ children }: TypeProps) {
  return <Provider store={store}>{children}</Provider>;
}
