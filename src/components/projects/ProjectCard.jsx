import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { FadeIn } from '../reusable/ui/';
import { Tag } from './Tags';

const IMAGE_PATH =
  'https://res.cloudinary.com/rahrang-dev/image/upload/c_scale,w_300,f_auto,fl_force_strip,q_100/website/projects/';

const ProjectCard = ({ title, description, tags, status, pKey }) => {
  const createTags = () => {
    return tags.sort((a, b) => (a > b ? 1 : -1)).map((t, i) => {
      return <Tag key={`${pKey}_${i}`} text={t} />;
    });
  };

  const borderClass = `border-b-${
    status === 'ongoing' ? 'blue-4' : 'maroon-4'
  }`;

  return (
    <FadeIn>
      <CardLink
        className={`m-4 shadow-md flex flex-col items-center rounded-lg no-underline transition ${borderClass}`}
        to={`/projects/${pKey}`}
      >
        <div
          className="flex flex-row flex-wrap items-center justify-center"
          style={{ height: 250 }}
        >
          <img
            className="rounded-t-lg w-full"
            src={`${IMAGE_PATH}${pKey}`}
            alt={`Project: ${title}`}
          />
        </div>
        <div
          className="px-2 pt-1 pb-3"
          style={{ display: 'grid', gridTemplateColumns: '3fr 2fr' }}
        >
          <div>
            <h4 className="mb-2 text-blue">{title}</h4>
            <p className="text-sm text-black leading-tight">{description}</p>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-end">
            {createTags()}
          </div>
        </div>
      </CardLink>
    </FadeIn>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  timespan: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired
};

ProjectCard.defaultProps = {
  tags: []
};

const CardLink = styled(Link)`
  height: 400px;
  width: 300px;

  &:hover {
    transform: scale(1.05);
  }
`;

CardLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default ProjectCard;
