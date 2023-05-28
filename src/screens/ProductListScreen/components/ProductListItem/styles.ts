import {StyleSheet} from 'react-native';
import {spacing} from '../../../../shared/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,

    overflow: 'hidden',
  },
  body: {
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
    flex: 1,
  },
  title: {
    paddingVertical: spacing.xs,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: spacing.s,
  },
});
