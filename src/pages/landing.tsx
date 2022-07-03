import styled from 'styled-components';

import { Nav } from '../component/nav';
import { H1 } from '../component/h1';
import { IconButton } from '../component/icon-button';
import landingPageImage from '../images/landing-page.jpg';
import { ArrowDown } from '../icons/arrow-down';

const content = {
  profile: {
    name: 'Rex Ogbemudia',
    workAt: 'Andela',
    location: 'Lagos',
    role: 'Web developer',
  },
};

const H1Styled = styled(H1)`
  direction: rtl;
`;

export function Landing() {
  return (
    <div className="lg:px-16 px-6 flex flex-col h-full">
      <Nav {...content.profile} />
      <div className="flex md:mt-5 flex-col justify-between flex-1 max-h-[700px]">
        <div className="flex md:mt-14 flex-col">
          <H1 className="uppercase w-full max-w[600px] break-word">{content.profile.role}</H1>
          <div className="bg-slate-400 w-full max-w-[900px] mt-6 overflow-hidden max-h-[550px] h-auto 2xl:max-w-[1200px] lg:max-w-[700px] md:max-w-full">
            <img src={landingPageImage} alt="pic" />
          </div>
        </div>
        <div className="flex mt-14 items-end justify-between flex-col-reverse md:flex-row">
          <IconButton className="text-sm md:text-2xl lg:text-3xl xl:text-4xl px-0 py-2">
            <ArrowDown
              width="3em"
              height="3em"
            />
          </IconButton>
          <H1Styled className="uppercase w-full max-w-lg text-right	">
            {content.profile.name}
          </H1Styled>
        </div>
      </div>
    </div>
  );
}
