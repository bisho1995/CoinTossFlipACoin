import styled from 'styled-components';
import colors from '../styles/colors';

const StyledText = styled.Text`
  text-align: ${({textAlign}) => (textAlign ? textAlign : 'left')};
  font-size: ${({fontSize}) => (fontSize ? fontSize : 10)};
  color: ${colors.black};
  width: ${({width}) => (width ? width : '100%')};
`;

export default StyledText;
