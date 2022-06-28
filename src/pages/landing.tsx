import { Nav } from "../component/nav";

const content = {
  profile: {
    name: "Rex Ogbemudia",
    workAt: "Andela",
    location: "Lagos, Nigeria"
  }
}

export function Landing() {
  return (
    <div className="px-16">
      <Nav {...content.profile}/>
    </div>
  );
}
