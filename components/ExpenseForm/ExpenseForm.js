import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, DatePickerAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getCategories } from '../../services/Category';
import { addExpense } from '../../services/Expense';
import styles from './ExpenseForm.style';

const ExpenseForm = () => {
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(new Date());
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    const handleAmountChange = (text) => {
        setAmount(text);
    };

    const handleCategoryChange = (itemValue) => {
        setCategory(itemValue);
    };

    const handleDateChange = async () => {
        try {
            const { year, month, day } = await DatePickerAndroid.open({
                mode: 'default',
                date,
            });
            setDate(new Date(year, month, day));
        } catch (error) {
            console.error('Error opening date picker:', error);
        }
    };

    const handleSubmit = () => {
        if (amount && category) {
            addExpense(category, parseFloat(amount), date.toISOString().slice(0, 10))
                .then(() => {
                    setAmount('');
                    setCategory(null);
                    setDate(new Date());
                })
                .catch((error) => console.error('Error adding expense:', error));
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                style={styles.picker}
                selectedValue={category}
                onValueChange={handleCategoryChange}
                prompt="Select Category">
                {categories.map((item) => (
                    <Picker.Item key={item.id} label={item.name} value={item.id} />
                ))}
            </Picker>
            <TextInput
                style={styles.input}
                placeholder="Amount"
                value={amount}
                onChangeText={handleAmountChange}
                keyboardType="numeric"
            />
            <Button title="Select Date" onPress={handleDateChange} />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default ExpenseForm;
