import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from 'components/projects/ProjectCard';
import { LinkTag } from 'components/projects/Tags';
import TagContainer from 'components/projects/TagContainer';
import { RowContainer, ColumnContainer } from 'components/reusable/Containers';
import PageHeader from 'components/reusable/PageHeader';
import Select from 'components/reusable/inputs/Select';
import EmptyState from 'components/reusable/EmptyState';
import {
  getParams,
  setParams,
  getUniqueTags,
  filterByStatus,
  filterByTag
} from 'utils/helpers';

const STATUS_OPTIONS = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Ongoing',
    value: 'ongoing'
  },
  {
    label: 'Deprecated',
    value: 'deprecated'
  }
];

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.allMarkdownRemark.edges,
      tag: '',
      // start: '',
      // end: '',
      status: ''
    };
    this.data = this.props.data.allMarkdownRemark.edges;
    this.uniqueTags = getUniqueTags(this.data);
  }

  componentDidMount() {
    this.setParams(this.props, true);
    this.filterData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const {
      location: { search }
    } = this.props;
    const {
      location: { search: nSearch }
    } = nextProps;
    if (search !== nSearch) this.filterData(nextProps);
  }

  filterData = props => {
    const params = getParams(props);
    let data = this.data;
    data = filterByStatus(data, params.status);
    data = filterByTag(data, params.tag);
    this.setState({ data });
  };

  setParams = (props, fromLocation = false) => {
    if (fromLocation) {
      const params = getParams(props);
      setParams(props, getParams(props));
      this.setState({ ...params });
    } else {
      const { status, tag, start, end } = this.state;
      const stateParams = { status, tag, start, end };
      setParams(props, stateParams);
    }
  };

  setTag = async tag => {
    const { tag: t } = this.state;
    if (tag === t) {
      await this.setState({ tag: '' });
    } else {
      await this.setState({ tag });
    }
    this.setParams(this.props);
  };

  setStatus = async status => {
    await this.setState({ status });
    this.setParams(this.props);
  };

  createCard = (edge, i) => {
    const {
      node: { frontmatter: p }
    } = edge;
    return <ProjectCard index={i} {...p} pKey={p.key} />;
  };

  createTags = () => {
    const { tag } = this.state;
    const allTags = this.uniqueTags.map(t => {
      return (
        <LinkTag key={t} onClick={this.setTag} text={t} isActive={t === tag} />
      );
    });
    return allTags;
  };

  render() {
    const { data, status } = this.state;
    return (
      <ProjectsContainer>
        <PageHeader
          title="My Projects"
          description="I work on projects of all natures to provide value to my communities, learn new skills, improve myself, and enjoy life!"
        />
        <ColumnContainer className="m-v-2" ai="flex-start" jc="flex-start">
          <Select
            name="status"
            options={STATUS_OPTIONS}
            selectedValue={status}
            resetValue={'all'}
            onSelect={this.setStatus}
          />
          <TagContainer onClear={this.setTag}>{this.createTags()}</TagContainer>
        </ColumnContainer>
        <CardsContainer>
          {data.length ? (
            <RowContainer>{data.map(this.createCard)}</RowContainer>
          ) : (
            <EmptyState text="No projects were found. Please clear the filters and try again!" />
          )}
        </CardsContainer>
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto auto;
`;

const CardsContainer = ColumnContainer.extend`
  grid-column: 1 / -1;
`;

export const projectQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
            key
            description
            status
            tags
            timespan
          }
        }
      }
    }
  }
`;

export default ProjectsPage;
