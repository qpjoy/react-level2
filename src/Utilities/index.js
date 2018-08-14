import Portal from './Portal';
import Toggle from './Toggle';
import elevation from './elevation';
import transition from './transition';
import colors from './colors';
import center from './center';

// colors can be imported as: import { colors} from 'Utilities';
// from there it is used/accessed via color: ${colors.black};
// Alternatively, a specific color may be imported and accessed with the
// following syntax: import { black } from 'Utilities'; color: ${black};
// This is because we have a global and individual export from './colors';

export * from './colors';
export * from './position';

export { Portal, Toggle, elevation, transition, colors, center };
