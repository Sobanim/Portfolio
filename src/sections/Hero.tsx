import React from 'react';
import Image from 'next/image';

type Info = {
  label: string;
  link?: string;
};

const infos: Info[] = [
  {
    label: 'sobolev.dmirtiy@gmail.com',
  },
  {
    label: '+421 951 125 682',
  },
  {
    label: 'Github',
    link: 'https://github.com/Sobanim?tab=repositories',
  },
];

function Hero() {
  return (
    <div>
      <Image src="/images/harold-profile.jpg" width="400px" height="400px" />
      <h2 className="text-6xl">Dmytro Soboliev</h2>
      <div>
        {infos.map((info, index) => {
          const hasPipe = index !== infos.length - 1;
          return (
            <InfoBarItem key={index} hasPipe={hasPipe}>
              {info.label}
            </InfoBarItem>
          );
        })}
      </div>
    </div>
  );
}

type Props = {
  children: React.ReactNode;
  hasPipe: boolean;
};

function InfoBarItem({ children, hasPipe }: Props) {
  return (
    <span>
      {children}
      {hasPipe && ` | `}
    </span>
  );
}

export default Hero;
