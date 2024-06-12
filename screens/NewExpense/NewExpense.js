import Container from '@components/Container';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './NewExpense.style';
import ExpenseForm from '../../components/ExpenseForm/ExpenseForm';

const NewExpense = () => {
    return (
        <Container>
            <SafeAreaView style={styles.formContainer}>
                <ExpenseForm />
            </SafeAreaView>
        </Container>
    );
};

export default NewExpense;
