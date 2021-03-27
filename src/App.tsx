import React, { useState } from "react";
import styled from "styled-components";

// Components
import Main from "./components/Main";
import Footer from "./components/Footer";

const Wrapper = styled.div`
  display: flex;
`;

interface StateTypes {
  twitter: string;
  github: string;
  linkedin: string;
  email: string;
  keybase: string;
}

const App = () => {
  const [socials, setSocials] = useState<StateTypes[] | any>([
    { twitter: "https://twitter.com/notnickdev" },
    { github: "https://github.com/notnickdev" },
    { linkedin: "https://www.linkedin.com/in/nicholas-n-5a9187195/" },
    { email: "thisnotnicholas@gmail.com" },
    { keybase: "https://keybase.io/nick241" },
  ]);

  return (
    <Wrapper>
      <Main
        twitter={socials[0].twitter}
        github={socials[1].github}
        linkedin={socials[2].linkedin}
        email={socials[3].email}
        keybase={socials[4].keybase}
      />
      <Footer />
    </Wrapper>
  );
};

export default App;
