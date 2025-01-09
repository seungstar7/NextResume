import Toc from "./Toc";
import {PropsWithChildren} from "react";
import {PreProcessingComponent} from "../common/PreProcessingComponent";
import {IProject} from "../project/IProject";

type Payload = IProject.Payload;

export const TOC = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  console.log(payload)
  return (
      <Toc content={'INTRODUCE'}/>
  );
}
