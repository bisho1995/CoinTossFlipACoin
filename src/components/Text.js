import React, {memo} from 'react';
import styled from 'styled-components';
import UseTheme from '../context/UseTheme';

// export default StyledText;

export default memo(
  UseTheme(({consumer: {colors}, ...props}) => {
    const StyledText = styled.Text`
      text-align: ${({textAlign}) => (textAlign ? textAlign : 'left')};
      font-size: ${({fontSize}) => (fontSize ? fontSize : 12)};
      color: ${({color}) => (color ? color : colors.primaryText)};
      width: ${({width}) => (width ? width : '100%')};
      margin-left: ${({marginLeft}) => (marginLeft ? marginLeft : 0)};
      margin-right: ${({marginRight}) => (marginRight ? marginRight : 0)};
      margin-top: ${({marginTop}) => (marginTop ? marginTop : 0)};
      margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : 0)};
      font-family: 'Poppins';
      font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : 'normal')};
    `;

    return <StyledText {...props} />;
  }),
);
