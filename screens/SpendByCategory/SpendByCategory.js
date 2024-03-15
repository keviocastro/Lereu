import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './SpendByCategory.styles';
import { SpendCategoryList } from './SpendCategoryList';
import ActionButton from '@components/ActionButton/index';
import { getExpensesForCurrentMonth } from '@services/Expense';
import Container from '@components/Container';

const SpendByCategory = () => {
  const navigation = useNavigation();
  const [spendByCategory, setSpendByCategory] = useState([]);

  useEffect(() => {
    getExpensesForCurrentMonth().then((data) => {
      console.log('data', data)
      setSpendByCategory(data);
    });
  }, []);

  const handleOnAddPress = () => {
    navigation.navigate('NewExpense')
  };

  return (
    <Container>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={styles.header}> 
          <View style={styles.summaryContainer}>
            <Text style={styles.totalAmount}>$1,423.00</Text>
            <Text style={styles.subtitle}>You spent $12,000 in the last 7 days</Text>
            <Text style={styles.subtitle}>Compared to $14,000 last week</Text>
          </View>
          <View style={styles.actionContainer}>
            <ActionButton title='See all' type='secondary'></ActionButton>
            <View style={styles.actionsSpacing} />
            <ActionButton title='Add' type='primary' onPress={handleOnAddPress} />
          </View>
        </View>
        <Text style={styles.sectionTitle}>Spend by category</Text>
        {spendByCategory.map(category => (
          <SpendCategoryList key={category.categoryName} {...category} />
          ))}
      </ScrollView>
    </Container>
  );
};

export default SpendByCategory;