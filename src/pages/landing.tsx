import styled from "styled-components"

import { Nav } from "../component/nav";
import { H1 } from "../component/h1";


const content = {
  profile: {
    name: "Rex Ogbemudia",
    workAt: "Andela",
    location: "Lagos",
    role: "Web developer"
  }
}

const H1Styled = styled(H1)`
  direction: rtl;
`

export function Landing() {
  return (
    <div className="lg:px-16 px-6 flex flex-col h-full">
      <Nav {...content.profile}/>
      <div className="flex md:mt-14 flex-col justify-between flex-1">
      <div className="flex md:mt-14 flex-col">
        <H1 className="uppercase w-full max-w[600px] break-word">{content.profile.role}</H1>
        <div className="h-96 bg-slate-400 w-full max-w-[1100px] mt-3">
          <img />
        </div>
      </div>
      <div className="flex mt-14 flex-col items-end	">
        <H1Styled className="uppercase w-full max-w-lg text-right	">{content.profile.name}</H1Styled>
      </div>
      </div>
    </div>
  );
}
