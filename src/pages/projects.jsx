import React, { Component } from 'react';
import styled from 'styled-components';

import ProjectCard from 'components/projects/ProjectCard';
import { LinkTag } from 'components/projects/Tags';
import TagContainer from 'components/projects/TagContainer';
import { RowContainer, ColumnContainer } from 'components/reusable/Containers';
import PageHeader from 'components/reusable/texts/PageHeader';
import Select from 'components/reusable/inputs/Select';
import DateRangeSelect from 'components/reusable/inputs/dates/DateRangeSelect';
import EmptyState from 'components/reusable/EmptyState';
import {
  getParams,
  setParams,
  getUniqueTags,
  filterByStatus,
  filterByTag,
  filterByStartDate,
  filterByEndDate
} from 'utils/helpers';
import { asString, DEFAULT_START, DEFAULT_END } from 'utils/dateHelpers';

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
      start: '',
      end: '',
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

  componentDidUpdate(prevProps, prevState) {
    const { tag, status, start, end } = this.state;
    const { tag: pTag, status: pStatus, start: pStart, end: pEnd } = prevState;
    if (tag !== pTag || status !== pStatus || start !== pStart || end !== pEnd)
      this.setParams(this.props);
  }

  filterData = props => {
    const params = getParams(props);
    let data = this.data;
    data = filterByStatus(data, params.status);
    data = filterByTag(data, params.tag);
    data = filterByStartDate(data, params.start);
    data = filterByEndDate(data, params.end);
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

  setTag = tag => {
    const { tag: t } = this.state;
    if (tag === t) this.setState({ tag: '' });
    else this.setState({ tag });
  };

  setDate = (type, date) => this.setState({ [type]: date });

  setStatus = status => this.setState({ status });

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
    const { data, status, start, end } = this.state;
    return (
      <ProjectsContainer className="p-h-1h p-v-1">
        <PageHeader
          title="My Projects"
          description="I work on projects of all natures to provide value to my communities, learn new skills, improve myself, and enjoy life!"
          style={{ alignSelf: 'start' }}
        />
        <ColumnContainer
          className="m-v-2"
          ai="flex-start"
          jc="flex-start"
          style={{ alignSelf: 'end' }}
        >
          <Select
            name="status"
            options={STATUS_OPTIONS}
            selectedValue={status}
            resetValue="all"
            onSelect={this.setStatus}
          />
          <DateRangeSelect
            start={start || DEFAULT_START}
            end={end || DEFAULT_END}
            onSelect={this.setDate}
          />
          <TagContainer onClear={this.setTag}>{this.createTags()}</TagContainer>
        </ColumnContainer>
        <CardsContainer>
          {data.length ? (
            <RowContainer>{data.map(this.createCard)}</RowContainer>
          ) : (
            <EmptyState text="No projects were found. Change the filters!" />
          )}
        </CardsContainer>
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  width: 100%;
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