import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { format as formatDate } from 'date-fns';

const ProjectCardLink = styled(Link)`
  background-color: ${props => props.theme.colors.widgetBgColor};
  width: 100%;
  border-radius: ${props => props.theme.br};

  padding: 1rem;

  &:hover {
    box-shadow: ${props => props.theme.colors.bxs};
    color: ${props => props.theme.colors.linkColor};

    .title {
      color: ${props => props.theme.colors.linkHoverColor};
    }
  }

  .title {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .description {
    font-weight: 300;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .meta-container {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    .tag {
      background-color: ${props => props.theme.colors.linkColor};
      color: ${props => props.theme.colors.bgColor};
      padding: 0.25rem;
      border-radius: ${props => props.theme.br};
      font-size: 0.75rem;

      margin-left: 0.25rem;
      margin-right: 0.25rem;

      &:first-of-type {
        margin-left: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }

    .timespan {
      font-size: 0.75rem;
    }
  }
`;

const ProjectCard = ({ title, slug, description, status, tags, timespan }) => (
  <ProjectCardLink to={`/projects/${slug}`}>
    <h3 className="title">{title}</h3>
    <p className="description">{description}</p>
    <div className="meta-container">
      <div>
        {tags.map(tag => (
          <span key={`${slug}_${tag}`} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <span className="timespan">{ProjectCard.renderTimespan(timespan)}</span>
    </div>
  </ProjectCardLink>
);

ProjectCard.renderTimespan = timespan => {
  const [start, end] = timespan;
  if (end) {
    return `Ended: ${formatDate(end, 'MMMM YYYY')}`;
  }
  return `Started: ${formatDate(start, 'MMMM YYYY')}`;
};

export default ProjectCard;
