import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './SpendByCategory.styles.js';
import { SpendCategoryList } from './SpendCategoryList';
import ActionButton from '@components/ActionButton';
import { findSpendByCategory, addSpendByCategory } from '@services/SpendByMonthService';
import { getCurrentMonth } from '@utils/DateUtil.js';

const SpendByCategory = () => {
  const [spendByCategory, setSpendByCategory] = useState(null);

  addSpendByCategory(getCurrentMonth(), {
    amount: 100,
    percentage: 20,
    categoryName: 'Food & Drink'
  });

  useEffect(() => {
    findSpendByCategory(getCurrentMonth()).then((data) => {
      setSpendByCategory(data);
    });
  }, []);

  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileIconContainer}>
          <Image
            resizeMode="contain"
            source={require('@assets/config.png')}
            style={styles.profileIcon}
          />
        </View> 
        <View style={styles.summaryContainer}>
          <Text style={styles.totalAmount}>$1,423.00</Text>
          <Text style={styles.subtitle}>You spent $12,000 in the last 7 days</Text>
          <Text style={styles.subtitle}>Compared to $14,000 last week</Text>
        </View>
        <View style={styles.actionContainer}>
          <ActionButton title='See all' type='secondary'></ActionButton>
          <View style={styles.actionsSpacing} />
          <ActionButton title='Add' type='primary' />
        </View>
      </View>
      <Text style={styles.sectionTitle}>Spend by category</Text>
      {spendByCategory.map(category => (
        <SpendCategoryList key={category.categoryName} {...category} />
      ))}
    </ScrollView>
  );
};

export default SpendByCategory;