import styled from "styled-components"

import { Nav } from "../component/nav";
import { H1 } from "../component/h1";


const content = {
  profile: {
    name: "Rex Ogbemudia",
    workAt: "Andela",
    location: "Lagos, Nigeria",
    role: "Web developer"
  }
}

const H1Styled = styled(H1)`
  direction: rtl;
`

export function Landing() {
  return (
    <div className="px-16 flex flex-col h-full">
      <Nav {...content.profile}/>
      <div className="flex mt-14 flex-col justify-between flex-1">
      <div className="flex mt-14 flex-col">
        <H1 className="uppercase w-full max-w-lg">{content.profile.role}</H1>
        <div className="h-96 bg-slate-400 w-8/12 mt-3">
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
