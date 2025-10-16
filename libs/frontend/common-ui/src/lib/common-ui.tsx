import styled from "styled-components";

const StyledCommonUi = styled.div`
  color: pink;
`;
export function CommonUi() {
  return (
    <StyledCommonUi>
      <h1 data-testid="common-ui-title">Welcome to CommonUi updated!</h1>
    </StyledCommonUi>
  );
}
