import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';

interface CommentProps {
  id: string;
  name: string;
  body: string;
}

const Comment: React.FC<CommentProps> = ({ id, name, body }) => {
  return (
    <Card containerStyle={styles.card}>
      <Text style={styles.nameField}>{name}</Text>
      <Text style={styles.bodyField}>{body}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 24,
  },
  nameField: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 21,
    letterSpacing: 0.2,
    color: '#001524',
  },
  bodyField: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.25,
    color: '#182F40',
  },
});

export default Comment;
