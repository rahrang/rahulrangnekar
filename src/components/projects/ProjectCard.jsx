import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { RowContainer } from 'components/reusable/Containers';
import { FadeIn } from 'components/reusable/ui/';
import { Tag } from './Tags';

const IMAGE_PATH =
  'https://res.cloudinary.com/rahrang-dev/image/upload/c_scale,w_300,f_auto,fl_force_strip,q_100/website/projects/';

let ProjectCard = ({ title, description, tags, timespan, index, pKey }) => {
  const createTags = () => {
    return tags.sort((a, b) => (a > b ? 1 : -1)).map((t, i) => {
      return <Tag key={`${pKey}_${i}`} text={t} />;
    });
  };

  return (
    <FadeIn>
      <CardLink className="m-v-2 m-h-2" to={`/projects/${pKey}`}>
        <ImageContainer>
          <Image src={`${IMAGE_PATH}${pKey}`} width="100%" />
        </ImageContainer>
        <MetaContainer className="p-h-h p-v-q">
          <div>
            <h4 className="m-b-h">{title}</h4>
            <p className="font-small">{description}</p>
          </div>
          <RowContainer ai="flex-start" jc="flex-end">
            {createTags()}
          </RowContainer>
        </MetaContainer>
      </CardLink>
    </FadeIn>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  timeSpan: PropTypes.arrayOf(PropTypes.string)
};

const CardLink = styled(Link)`
  border-radius: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
  width: 300px;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = RowContainer.extend`
  height: 250px;
`;

const Image = styled.img`
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const MetaContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

CardLink.propTypes = {
  to: PropTypes.string
};

export default ProjectCard;
