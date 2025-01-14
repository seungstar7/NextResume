import { PropsWithChildren } from 'react';
import { IPortfolio } from './IPortfolio';
import { EmptyRowCol } from '../common';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';

export default function OpenSourceRow({
  payload,
}: PropsWithChildren<{ payload: IPortfolio.Payload }>) {
  return (
    <EmptyRowCol>
      {payload.list.map((item, index) => (
        <CommonRows key={index.toString()} payload={serialize(item)} index={index} />
      ))}
    </EmptyRowCol>
  );
}

function serialize(item: IPortfolio.Item): IRow.Payload {
  return {
    left: {
      title: item.title,
    },
    right: {
      descriptions: item.descriptions,
    },
  };
}
