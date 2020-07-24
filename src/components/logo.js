import React from 'react';
import {graphql, StaticQuery} from 'gatsby';

export default function Logo(props) {
  return (
    <StaticQuery
      query={graphql `
        {
          allWordpressWpLogo{
            edges{
              node{
                url{
                  source_url
                }
              }
            }
          }
        }
      `}
      render={data => (
          <div>
            <img height={props.height} src={data.allWordpressWpLogo.edges[0].node.url.source_url} alt="logo" />
          </div>
      )}
    />
  )
}
