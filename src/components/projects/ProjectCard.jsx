import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { FadeIn } from 'components/reusable/ui/';
import { Tag } from './Tags';

const IMAGE_PATH =
  'https://res.cloudinary.com/rahrang-dev/image/upload/c_scale,w_300,f_auto,fl_force_strip,q_100/website/projects/';

const ProjectCard = ({ title, description, tags, status, pKey }) => {
  const createTags = () => {
    return tags.sort((a, b) => (a > b ? 1 : -1)).map((t, i) => {
      return <Tag key={`${pKey}_${i}`} text={t} />;
    });
  };

  const borderClass = `border-b-${status === 'ongoing' ? 'blue' : 'maroon'}`;

  return (
    <FadeIn>
      <CardLink
        className={`m-4 shadow-md flex flex-col items-center rounded-lg no-underline transition ${borderClass}`}
        to={`/projects/${pKey}`}
      >
        <ImageContainer className="flex flex-row flex-wrap items-center justify-center">
          <img
            className="rounded-t-lg"
            src={`${IMAGE_PATH}${pKey}`}
            width="100%"
          />
        </ImageContainer>
        <MetaContainer className="px-2 pt-1 pb-3">
          <div>
            <h4 className="mb-2 text-blue">{title}</h4>
            <p className="text-sm text-black leading-tight">{description}</p>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-end">
            {createTags()}
          </div>
        </MetaContainer>
      </CardLink>
    </FadeIn>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  timeSpan: PropTypes.arrayOf(PropTypes.string),
  status: PropTypes.string
};

const CardLink = styled(Link)`
  height: 400px;
  width: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  height: 250px;
`;

const MetaContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

CardLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default ProjectCard;
