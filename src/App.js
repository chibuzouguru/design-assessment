import React, { Component } from 'react';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';
import getData from "./data";
import Colors from "./components/Colors";
import SingleSwatch from "./components/SingleSwatch";
import './App.scss';


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      colors: [],
      currentSwatch: null,
      currentPage: 1,
      itemsPerPage: 12
    }
  }

  componentDidMount() {
    let colors = getData();
    this.setState({
      colors
    });

  }

  handlePageChange = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  showSingleSwatch = (id) => {
    // set the value of the id to the current swatch
    this.setState({
      currentSwatch: this.state.colors.filter(item => item.id === id)[0]
    });
  }

  closeSwatch = (event) => {
    this.setState({
      currentSwatch: null
    });
  }

  showRandomColor = () => {
    // get a random number between 0 and the length of the colors array
    let maxNumber = this.state.colors.length;
    let minNumber = 0;

    let id = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

    this.showSingleSwatch(id);
  }

  render() {
    const { colors, currentPage, itemsPerPage, currentSwatch } = this.state;

    // get the value of the last
    const lastColorSwatch = currentPage * itemsPerPage;
    const firstColorSwatch = lastColorSwatch - itemsPerPage;
    const currentDisplayedSwatches = colors.slice(firstColorSwatch, lastColorSwatch);

    // displaying the list of the page numbers
    const paginationNumbers = [];

    // get the number of pages possible given the amount of data we have inside
    // the colors array.
    for(let i = 1; i <= Math.ceil(colors.length / itemsPerPage); i++) {
      paginationNumbers.push(i);
    }

    return (
      <div className="main">
        <div className="main__container">
          <Header />
          <div className="content">
            <Sidebar showRandomColor={this.showRandomColor} />

            {/* display either the grid or individual swatch */}
            {currentSwatch 
              ? <SingleSwatch item={currentSwatch} closeSwatch={this.closeSwatch}/> 
              : <Colors 
                  colors={currentDisplayedSwatches || []} 
                  numbers={paginationNumbers}
                  handlePageChange={this.handlePageChange}
                  showSingleSwatch={this.showSingleSwatch}
                />}
          </div>
        </div>
        
        
      </div>
    );
  }
}

export default App;
