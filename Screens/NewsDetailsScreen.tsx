import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { sendComment } from '../store/action-creators/commentsActionCreators';
import { fetchComments } from '../store/action-creators/commentsActionCreators';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Card } from 'react-native-elements';
import Comment from '../components/Comment';
import { NavigationStackProp } from 'react-navigation-stack';

interface NewsDetailsProps {
  navigation: NavigationStackProp<{ id: string }>;
}

const NewsDetailsScreen: React.FC<NewsDetailsProps> = ({ navigation }) => {
  const id = navigation.getParam('id'); //post id
  const title = navigation.getParam('title');
  const description = navigation.getParam('description');
  const [comment, setComment] = useState('');

  const { comments, commentsError } = useTypedSelector(
    (state) => state.comments
  );

  const dispatch = useDispatch();

  const sendCommentHandler = () => {
    if (comment.trim().length > 0) {
      dispatch(sendComment(id, comment));
    }
  };

  useEffect(() => {
    dispatch(fetchComments(id));
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView>
          <Card containerStyle={styles.postContainer}>
            <Text style={styles.postTitle}>{title}</Text>
            <Text style={styles.postDescription}>{description}</Text>
          </Card>
          <View style={styles.screenContainer}>
            <Text style={styles.commentsText}>Comments</Text>
            <TextInput
              style={styles.inputContainer}
              multiline
              numberOfLines={5}
              placeholder="Here you can add your comment"
              value={comment}
              onChangeText={(text) => setComment(text)}
            />
            <Pressable style={styles.addButton} onPress={sendCommentHandler}>
              <Text style={styles.buttonText}>Add</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
        {commentsError ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}
          >
            <Text>{commentsError}</Text>
          </View>
        ) : (
          comments.map((comment: any) => {
            return (
              <Comment
                key={comment.id}
                id={comment.id}
                name={comment.name}
                body={comment.body}
              />
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    padding: 16,
  },
  postContainer: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    marginBottom: 40,
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#001524',
    lineHeight: 26,
    letterSpacing: -0.4,
    marginBottom: 12,
  },
  postDescription: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 25,
    letterSpacing: 0.25,
    color: '#182F40',
    marginBottom: 8,
  },
  commentsText: {
    fontSize: 14,
    color: '#586976',
    lineHeight: 21,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#466BC9',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 8,
    marginVertical: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});

export default NewsDetailsScreen;
