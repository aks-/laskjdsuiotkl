import React from 'react';
import logo from './logo.svg';
import './App.css';
import SortableTree from 'react-sortable-tree';
import DndApp from './DndApp.js'

class Tree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            treeData: [{ title: 'Chicken', children: [ { title: 'Egg' } ] }],
        };
    }

    render() {
        return (
            <div style={{ height: 400 }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => this.setState({ treeData })}
                />
            </div>
        );
    }
}

function App() {
  return (
    <div className="App">
        <Tree />
        <DndApp />
    </div>
  );
}

export default App;
