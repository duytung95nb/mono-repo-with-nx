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
      <NxWelcome title="todo-user-app" />
    </StyledApp>
  );
}

export default App;
