import React from 'react';
import { View, Text } from 'react-native';
import HorizontalBar from 'components/HorizontalBar';
import styles from './SpendCategoryList.styles';

export const SpendCategoryList = ({ categoryName, amount, percentage }) => {
    return (
        <View style={styles.spendCategoryContainer}>
            <View style={styles.spendCategoryTitleContainer}>
                <Text style={styles.categoryName}>{categoryName}</Text>
                <Text style={styles.categoryAmount}>{amount}</Text>
            </View>
            <View style={styles.spendCategoryHorizontalBarContainer}>
                <HorizontalBar />
            </View>
            <Text style={styles.categoryPercentage}>{`${percentage}% of total spend`}</Text>
        </View>
    );
};
