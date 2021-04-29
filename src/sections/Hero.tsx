import React from 'react';
import Image from 'next/image';
import InfoBar from '../components/InfoBar';
import Subtitle from '../components/Subtitle';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex justify-center lg:w-1/3">
        <Image
          className="rounded-full"
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
              label: 'Github',
              link: 'https://github.com/Sobanim?tab=repositories',
            },
          ]}
        />

        <div className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam
          temporibus, neque vel quos laborum quidem, corrupti molestias quod
          deleniti unde obcaecati at pariatur? Vel, illum numquam et libero
          atque inventore delectus maiores, pariatur id vero sed sunt sint dicta
          optio qui earum. Voluptatum veniam nostrum saepe ullam repellat
          sapiente.
        </div>
        <InfoBar
          infos={[
            { label: 'Kosice' },
            { label: 'Slovakia' },
            { label: '040 11' },
          ]}
        />
      </div>
    </div>
  );
}

export default Hero;
