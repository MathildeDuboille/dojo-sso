import styled from 'styled-components';
import { getSpacing } from 'stylesheet';

export const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
RootContainer.displayName = 'RootContainer';

export const PageContent = styled.main`
  padding: ${getSpacing(6)};
  flex-grow: 1;
`;
PageContent.displayName = 'PageContent';
