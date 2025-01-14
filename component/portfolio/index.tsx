import { PropsWithChildren } from 'react';
import { IPortfolio } from './IPortfolio';
import OpenSourceRow from './row';
import { CommonSection } from '../common/CommonSection';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IPortfolio.Payload;

export const Portfolio = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="Portfolio">
      <OpenSourceRow payload={payload} />
    </CommonSection>
  );
}
