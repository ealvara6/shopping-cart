import { v4 as uuid4 } from 'uuid';
import { styled } from 'styled-components';
import facebookIcon from '../assets/facebook-app-symbol.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';
import youtubeIcon from '../assets/youtube.png';
import Contact from './Contact';
import Copyright from './Copyright';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7C9D96;
  color: white;
  padding: 20px;
  gap: 40px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const SocialsIcon = styled.button<{ image: string }>`
  background-image: url(${(props) => props.image});
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  line-height: 1.3;
`;

const Header = styled.h1`
  font-size: 20px;
`;

const Line = styled.div`
  border: 1px solid white;
  width: 75%;
`;

function Footer() {
  const icons = [facebookIcon, twitterIcon, instagramIcon, youtubeIcon];
  const section = [
    {
      title: 'ABOUT US',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem voluptatem necessitatibus error quae assumenda, quaerat aperiam eligendi dolores odit.',
    },
    {
      title: 'NEED HELP',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima rem voluptatem necessitatibus error quae assumenda, quaerat aperiam eligendi dolores odit.',
    },
  ];

  const sectionComponents = section.map((item) => (
    <Section key={uuid4()}>
      <Header>{item.title}</Header>
      <div>{item.desc}</div>
    </Section>
  ));
  const iconComponents = icons.map((item) => <SocialsIcon image={item} key={uuid4()} />);

  return (
    <StyledFooter>
      <Socials>
        {iconComponents}
      </Socials>
      <Info>
        {sectionComponents}
        <Section>
          <Header>CONTACT US</Header>
          <Contact />
        </Section>
      </Info>
      <Line />
      <Copyright />
    </StyledFooter>
  );
}

export default Footer;
