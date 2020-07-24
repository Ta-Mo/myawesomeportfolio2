import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';
import SiteInfo from './SiteInfo';
import Logo from './logo';

// renders a div element in html and applies any CSS that we pass to it
// within these backticks to that element
const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`
const MainMenuInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  width: 960px;
  height: 100%;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`
const MainMenu = () => (
  <StaticQuery query={graphql`
  {
    allWordpressMenusMenusItems(filter: {
      name:{
        eq: "Main menu"
      }
    }){
      edges {
        node {
          name 
          items {
            title
            slug
            }
          }
        }
      }
    }
`} render = {props => (
  <MainMenuWrapper>
    <MainMenuInner>
      <SiteInfo /><Logo height={50}/>
      {props.allWordpressMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem to={item.slug === 'home' ? '/' : `/${item.slug}`} key={item.title}>
          {item.title}
        </MenuItem>
      ))}
    </MainMenuInner>
  </MainMenuWrapper>
)} />
);
export default MainMenu;