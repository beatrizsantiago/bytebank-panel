import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap } = lifecycles;
export const { mount } = lifecycles;
export const { unmount } = lifecycles;
