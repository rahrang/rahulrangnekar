import React from 'react';
import styled from 'styled-components';

import LandingImage from 'components/reusable/images/LandingImage';
import { RowContainer, CircleContainer } from 'components/reusable/Containers';
import { IntLinkButton } from 'components/reusable/buttons/LinkButton';
import {
  LandingHeader as Header,
  LandingMessage as Message
} from 'components/reusable/texts/';

const IndexPage = ({ data }) => {
  const imgInfo = {
    src:
      'https://res.cloudinary.com/rahrang-dev/image/upload/f_auto,fl_force_strip,q_auto:best/website/landing_images/home-5',
    alt: 'Rahul Rangnekar'
  };

  const content = (
    <React.Fragment>
      <Header className="m-b-h">Rahul Rangnekar</Header>
      <Message>Software Developer &amp;&amp; Writer</Message>
      <span>
        <IntLinkButton className="btn-primary m-h-h p-h-1" to="/contact">
          Contact Me
        </IntLinkButton>
        <IntLinkButton className="btn-alternate p-h-1" to="/projects">
          Check out my Projects
        </IntLinkButton>
      </span>
    </React.Fragment>
  );

  return (
    <div className="full-width">
      <LandingImage
        imgInfo={imgInfo}
        title="Rahul Rangnekar"
        content={content}
        position={{ top: '35%', left: '50px' }}
      />
      <SectionGrid className="m-t-2 p-h-1">
        {/* this spans the first row */}
        <HeaderRow>
          <SectionSubheader className="m-b-q">
            You have problems?
          </SectionSubheader>
          <SectionHeader className="blue-light fw-300">
            I create solutions.
          </SectionHeader>
        </HeaderRow>
        {/* this is the second row, 3 circles */}
        <CircleContainer bgColor="#6f95d0">
          <h4 className="c-off-white">Here</h4>
          <p className="c-off-white">This is some text.</p>
        </CircleContainer>
        <CircleContainer bgColor="#6f95d0">
          <h4 className="c-off-white">Here</h4>
          <p className="c-off-white">This is some text.</p>
        </CircleContainer>
        <CircleContainer bgColor="#6f95d0">
          <h4 className="c-off-white">Here</h4>
          <p className="c-off-white">This is some text.</p>
        </CircleContainer>
        <div>Seriously though, just contact me.</div>
      </SectionGrid>
    </div>
  );
};

export default IndexPage;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`;

const HeaderRow = styled.div`
  grid-column: 1 / -1;
  justify-self: center;
  text-align: center;
`;

const SectionSubheader = styled.h3`
  font-size: 1.25rem;
`;

const SectionHeader = styled.h2`
  font-size: 2.5rem;
`;
