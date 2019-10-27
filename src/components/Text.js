import styled from 'styled-components';
import colors from '../styles/colors';

const StyledText = styled.Text`
  text-align: ${({textAlign}) => (textAlign ? textAlign : 'left')};
  font-size: ${({fontSize}) => (fontSize ? fontSize : 10)};
  color: ${colors.primaryText};
  width: ${({width}) => (width ? width : '100%')};
  margin-left: ${({marginLeft}) => (marginLeft ? marginLeft : 0)};
`;

export default StyledText;
