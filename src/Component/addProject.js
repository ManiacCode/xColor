import React, { Component } from 'react';
import { Button, StyleSheet, View, TextInput, Modal, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

export default class AddProject extends Component {
  state = { nameProject: null }
  
  render() {
    return(
      <Modal
        visible={this.props.visible}
        onRequestClose={this.props.onSave}
        animationType="slide"
      >
        <View style={styles.container}>
          <TextInput 
            placeholder="Projektname eingeben"
            underlineColorAndroid="transparent"
            onChangeText= { text => this.setState({ nameProject: text })}
          />

          <View style={styles.save}>
            <Icon
              name="save"
              size="64"
              onPress={ () => {
                this.setState({name:null});
                this.props.onSave(this.state.nameProject);
              }}
            />
          </View>

          <View style={styles.close}>
            <Icon
              name="times_circle"
              size="64"
              onPress={ () => {
                this.setState({name:null});
                this.props.onSave(this.state.nameProject);
              }}
            />
          </View>

          <View style={styles.close}>
            <Ionicons
              name="close_circle"
              size="64"
              onPress={ () => {
                this.setState({name:null});
                this.props.onSave(this.state.nameProject);
              }}
            />
          </View>

        </View>
      </Modal>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});