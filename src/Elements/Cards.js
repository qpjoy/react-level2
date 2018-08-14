import styled from 'styled-components';
import { elevation, transition, colors, black } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  // color: ${colors.teal};
  color: ${black};
  padding: 15px;
  ${elevation[4]};
  ${transition({})};
  :hover {
    ${elevation[5]};
  }
`;
