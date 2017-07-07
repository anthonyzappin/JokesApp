import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

export default class Display extends React.Component {

  handleAccept () {
    console.log("I like this joke!")
  }

  handleReject () {
    console.log("I don't like this joke!")
  }

  render() {
    return (

      <SwipeCards
        cards={this.props.jokes}
        renderCard={ (jokeObject) => <Card joke={jokeObject.joke} />}
        renderNoMoreCards={ () => <NoMoreCards />}

        handleYup={this.handleAccept}
        handleNope={this.handleReject}
      />

    )
  }
}

class Card extends React.Component {

  render() {
    return (
      <View style={styles.card}>
        <Text>{this.props.joke}</Text>
      </View>
    )
  }

}

class NoMoreCards extends React.Component {

  render() {
    return (
      <View>
        <Text>No More Jokes!</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({

  card: {
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 2,
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})
