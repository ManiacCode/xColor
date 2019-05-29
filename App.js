import React from 'react';
import { Button, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import AddProject from './src/Component/addProject'
import ShowProject from './src/Component/showProject';
import { Icon } from 'react-native-elements';

export default class App extends React.Component {
  state = { index: 0, showProjectNameInputScreen: false, dataset: []};
  
  _addName = (nameProject) => {
    let {dataset} = this.state;
    if (nameProject !== null){
      dataset.push({name:nameProject});
      this._storageData(dataset);
    }
    this.setState({index: dataset.length - 1, showProjectNameInputScreen: false, dataset:dataset})
  }

  _displayNextProject() {
    let { index, dataset } = this.state;
    let nextIndex = index + 1;
    if (nextIndex === dataset.length) nextIndex = 0;
    this.setState({ index : nextIndex});
  }

  _storageData(dataset) {
    AsyncStorage.setItem('DATA', JSON.stringify(dataset));
  }

  _retrieveData = async () => {
    let value = AsyncStorage.getItem('DATA');
    if (value !== null) {
      JSON.parse(value);
      this.setState({ dataset : value});
    }
  }

  componentDidMount(){
    this._retrieveData();
  }

  render() {
    let {index, dataset} = this.state;
    const data = dataset[index];
    let content = null;

    if (data){
      content = <ShowProject name={data.name} />;
    } else {
      content = <Text>keine Einträge</Text>
    }

    return (
      <View style={styles.container}>

        

        <AddProject 
          visible={this.state.showProjectNameInputScreen}
          onSave={this._addName}
        />

        <View style={styles.content}>
          {content}
        </View>
        

        <View style={styles.nextButton}>  
          <Button 
          style={{color: '#fff'}}
          title="next" 
          onPress={() => this._displayNextProject()} />
        </View>

        <View style={styles.addProject}>
          <Icon
            name="add-circle"
            size="64"
            onPress={ () => this.setState({showProjectNameInputScreen: true})}
          />
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
  addProject: {
    position: 'absolute',
    bottom: 50,
  },
  content: {
    position: 'absolute',
    top: 150,
  }
});
