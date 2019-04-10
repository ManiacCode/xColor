import React, { Component } from 'react';
import { Button, StyleSheet, View, TextInput, Modal, Text } from 'react-native';

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
          <Text>{this.state.nameProject}</Text>
          <Button 
            title="save" 
            onPress={ () => {
              this.setState({name:null});
              this.props.onSave(this.state.nameProject);
            }}
          />
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