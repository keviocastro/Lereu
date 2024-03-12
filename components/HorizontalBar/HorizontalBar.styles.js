import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  horizontalBarContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    borderRadius: 4,
    backgroundColor: '#E5E7EB', // Tailwind color 'zinc-200'
  },
  horizontalBar: {
    height: 8,
    width: 72,
    borderRadius: 2,
    backgroundColor: '#374151', // Tailwind color 'neutral-900'
  },
});

export default styles;