import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

class SearchFilter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pivotState: props,
      searchValue: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      pivotState: nextProps,
      searchValue: ""
    });
  }

  onSearchChange (s) {
    this.props.onSearchChange(s.target.value)
  }

  render() {
    return (
      <div>
        <Col className="col-md-2 pull-left">
          <input 
            value= {this.props.searchValue} 
            className= "pvtDropdownValue pvtDropdownCurrent pvtSearch"
            placeholder= "Search"
            onChange= { s => {
              this.onSearchChange(s)
            }}>
          </input>
        </Col>
      </div>
    );
  }

}

export default SearchFilter;