import React from 'react';

type Props = {
  children: React.ReactNode;
  hasPipe: boolean;
};

function InfoBarItem({ children, hasPipe }: Props) {
  return (
    <span cl>
      <span className="text-pink-500">{children}</span>
      {hasPipe && <span className="px-1 lg:px-2"> | </span>}
    </span>
  );
}

export default InfoBarItem;
