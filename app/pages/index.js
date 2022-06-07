import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const FixedHeaderFooterContainer = styled.div`
  display: flex;
	flex-direction: column;
	height: 100%;
  
  .clearMenuStyle {
    flexShrink: 0;
		borderRadius: 0;
		margin: 0;
  }
`;

const Home = () => (
  <FixedHeaderFooterContainer>
    { /* the following section is fixed to the top */}
    <Menu
      inverted
      color="green"
      borderless
      className="clearMenuStyle">
      <Menu.Item header>
        Fixed Header
      </Menu.Item>
    </Menu>

    <div
      style={{
        flexGrow: 1,
        overflowX: "hidden",
        overflowY: "auto",
      }}>
      <p style={{ paddingBottom: "200%" }}>This container can scroll vertically. Give it a try!</p>
      <p>You made it to the bottom!</p>
    </div>

    { /* the following section is fixed to the bottom */}
    <Menu
      inverted
      color="green"
      borderless
      className="clearMenuStyle">
      <Menu.Item header>
        Fixed Footer
      </Menu.Item>
    </Menu>
  </FixedHeaderFooterContainer>
);
export default Home;
