import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { NavigationStackProp } from 'react-navigation-stack';

interface NewsItemProps {
  id: string;
  title: string;
  description: string;
  navigation: NavigationStackProp;
}

const NewsItem: React.FC<NewsItemProps> = ({
  id,
  title,
  description,
  navigation,
}) => {
  const onSelect = () => {
    navigation.navigate('NewsDetails', {
      id: id,
      title: title,
      description: description,
    });
  };

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.flexContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View>
          <AntDesign
            name="rightcircleo"
            size={24}
            color="#466BC9"
            onPress={onSelect}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 8,
    borderRadius: 8,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#001524',
    letterSpacing: 0.2,
    margin: 2,
  },
  description: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    color: '#A0ABB3',
    letterSpacing: 0.2,
    margin: 2,
  },
});

export default NewsItem;
