import styled from "styled-components";
import NxWelcome from "./nx-welcome";
import { CommonUi } from "common-ui";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <CommonUi />
      <h1>Welcome to admin</h1>
      <NxWelcome title="todo-admin" />
    </StyledApp>
  );
}

export default App;
