import styled from 'styled-components';
import { useLanyard } from 'use-lanyard';

// Components
import Main from './components/Main';
import Footer from './components/Footer';

import ActivityComponent from './components/Activity';

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

const PRESENCE = 0;

const App = () => {
  const socials: StateTypes[] | any = [
    { twitter: 'https://twitter.com/notnickdev' },
    { github: 'https://github.com/notnickdev' },
    { linkedin: 'https://www.linkedin.com/in/nicholas-n-5a9187195/' },
    { email: 'thisnotnicholas@gmail.com' },
    { keybase: 'https://keybase.io/nick241' },
  ];

  const { data: lanyard } = useLanyard('463449066672619520');
  const activity = lanyard?.activities.find(
    activity => activity.type === PRESENCE
  );

  return (
    <Wrapper>
      {activity && (
        <ActivityComponent
          activity={activity}
          name={activity.name}
          editing={activity.details}
          state={activity.state}
        />
      )}

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
