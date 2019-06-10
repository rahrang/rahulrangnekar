import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "images/about/rahul-standing.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div style={{ minWidth: 300, maxWidth: 400 }}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    )}
  />
);

export default Image;
