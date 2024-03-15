import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 8,
        width: width * 0.4, 
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    primary: {
        backgroundColor: '#2563eb',
        color: '#ffffff'
    },
    secondary: {
        backgroundColor: '#f3f4f6',
        color: '#374151'
    },
});

export default styles;