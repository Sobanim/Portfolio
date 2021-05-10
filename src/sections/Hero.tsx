import React from 'react';
import Image from 'next/image';
import InfoBar from '../components/InfoBar';
import Subtitle from '../components/Subtitle';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-center lg:w-1/3">
        <Image
          className="rounded-full w-16"
          src="/images/profile-photo.jpg"
          width="250px"
          height="250px"
        />
      </div>
      <div className="flex flex-col lg:w-2/3 items-center lg:items-start">
        <Subtitle subtitle="Dmytro Soboliev" />

        <InfoBar
          infos={[
            {
              label: 'sobolev.dmirtiy@gmail.com',
              link: 'mailto:sobolev.dmirtiy@gmail.com',
            },
            {
              label: '+421 951 125 682',
              link: 'tel:+421951125682',
            },
            {
              label: 'LinkedIn profile',
              link: 'https://www.linkedin.com/in/dmytro-soboliev/?locale=en_US',
            },
            {
              label: 'Github profile',
              link: 'https://github.com/Sobanim?tab=repositories',
            },
          ]}
        />

        <div className="my-3">
          <p>
            I am a junior frontend developer; I create a web user interface UI /
            UX and through it I build effective communication with the user. I
            will create the necessary good website for your company, which can
            work effectively on various devices. I quickly learn the development
            of web applications and apply new knowledge in practice.
          </p>
        </div>
        <InfoBar
          infos={[
            { label: 'Košice' },
            { label: 'Slovakia' },
            { label: '040 11' },
          ]}
        />
      </div>
    </div>
  );
}

export default Hero;
