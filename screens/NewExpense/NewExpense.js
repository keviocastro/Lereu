import Container from '@components/Container';
import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NewExpense.style';


const NewExpense = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <SafeAreaView style={styles.formContainer}>
                <Text>New Expense</Text>
            </SafeAreaView>
        </Container>
    );
};

export default NewExpense;