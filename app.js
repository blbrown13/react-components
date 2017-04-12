// var Milk = () => (
//   <li>Milk</li>
// );
//
// var Beer = () => (
//   <li>Beer</li>
// );

class GroceryListItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }


  onListItemClick (event) {
    this.setState({
      done: !this.state.done
    });
    console.log('I got clicked');
  }


  // onMouseOver
  onListItemHover (event) {
    this.setState({
      hover: !this.state.hover
    });
    console.log("I'm hovering");
  }


  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'lighter'
    };

    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }

};

var GroceryList = (props) => (
  <div>
    <h2>Our Grocery List</h2>
    <ul>
      {props.items.map((item, index) =>
        <GroceryListItems key={index} item={item}/>
      )}
    </ul>
  </div>
);

ReactDOM.render(<GroceryList items={['Milk', 'Beer', 'Chocolate']} />, document.getElementById("app"));
