import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ExpenseForm from '../components/ExpenseForm/ExpenseForm';
import { getCategories } from '../services/Category';
import { addExpense } from '../services/Expense';

jest.mock('../services/Category', () => ({
    getCategories: jest.fn(),
}));

jest.mock('../services/Expense', () => ({
    addExpense: jest.fn(),
}));

describe('ExpenseForm', () => {
    beforeEach(() => {
        getCategories.mockResolvedValue([
            { id: 1, name: 'Food', color: '#f44336' },
            { id: 2, name: 'Transportation', color: '#e91e63' },
        ]);
        addExpense.mockResolvedValue();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render form with default values', () => {
        const { getByPlaceholderText, getByLabelText } = render(<ExpenseForm />);
        expect(getByPlaceholderText('Amount')).toBeDefined();
        expect(getByLabelText('Select Category')).toBeDefined();
    });

    it('should update form inputs', () => {
        const { getByPlaceholderText, getByLabelText, getAllByText } = render(<ExpenseForm />);
        const amountInput = getByPlaceholderText('Amount');
        const categoryPicker = getByLabelText('Select Category');
        const foodOption = getAllByText('Food')[0];

        fireEvent.changeText(amountInput, '100');
        fireEvent.press(foodOption);

        expect(amountInput.props.value).toBe('100');
        expect(categoryPicker.props.selectedValue).toBe('Food');
    });

    it('should add expense to database on form submission', async () => {
        const { getByPlaceholderText, getByLabelText, getAllByText, getByText } = render(<ExpenseForm />);
        const amountInput = getByPlaceholderText('Amount');
        const categoryPicker = getByLabelText('Select Category');
        const foodOption = getAllByText('Food')[0];
        const submitButton = getByText('Submit');

        fireEvent.changeText(amountInput, '100');
        fireEvent.press(foodOption);
        fireEvent.press(submitButton);

        expect(addExpense).toHaveBeenCalledWith(1, 100, expect.any(String));
    });

    it('should not submit form with invalid data', () => {
        const { getByText } = render(<ExpenseForm />);
        const submitButton = getByText('Submit');

        fireEvent.press(submitButton);

        expect(addExpense).not.toHaveBeenCalled();
    });
});
