import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import AddProject from './src/Component/addProject'
import ShowProject from './src/Component/showProject';


const data = [
  {
    name: '',
  }
];

export default class App extends React.Component {
  state = { index: 0, showProjectNameInputScreen: false, dataset:data};
  
  _addName = (nameProject) => {
    let {dataset} = this.state;
    if (nameProject !== null){
      dataset.push({name:nameProject});
    }
    this.setState({showProjectNameInputScreen: false, dataset:dataset})
  }

  render() {
    let {index, dataset} = this.state;
    const data = dataset[index];

    let nextIndex = index + 1;

    if (nextIndex === dataset.length) nextIndex = 0;

    return (
      <View style={styles.container}>
        <Button title="add Project" onPress={ () => this.setState({showProjectNameInputScreen: true})} />

        <AddProject 
          visible={this.state.showProjectNameInputScreen}
          onSave={this._addName}
        />

        <ShowProject name={data.name} />

        <View style={styles.nextButton}>  
          <Button 
          style={{color: '#fff'}}
          title="next" 
          onPress={() => this.setState({ index: nextIndex})} />
        </View>
      </View>
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
