import {colors} from './styles';
import WithTheme from './context/withTheme';
import App from './containers/index';

export default WithTheme(App, colors);
