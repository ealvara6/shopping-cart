import { v4 as uuid4 } from 'uuid';
import { styled } from 'styled-components';
import mapIcon from '../assets/maps-and-flags.png';
import phoneIcon from '../assets/telephone.png';
import mailIcon from '../assets/mail.png';

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 5px;
`;

const Icon = styled.div<{ src: string }>`
  background-image: url(${(props) => props.src});
  background-position: center;
  width: 16px;
  height: 16px;
`;

function Contact() {
  const contactInfo = [
    {
      src: mapIcon,
      info: '123 Sesame Street',
    },
    {
      src: phoneIcon,
      info: '777-777-7777',
    },
    {
      src: mailIcon,
      info: 'fake-email@gmail.com',
    },
  ];
  const contactInfoComponents = contactInfo.map((item) => (
    <ContactInfo key={uuid4()}>
      <Icon src={item.src} />
      <div>{item.info}</div>
    </ContactInfo>
  ));

  return (
    <StyledContact>
      {contactInfoComponents}
    </StyledContact>
  );
}

export default Contact;
