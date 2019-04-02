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
            //onKeyUp={(e) => this.onKepPressed(e, this)}
            onKeyUp={ s => {
              let code = s.charCode || s.keyCode;
                if (code === 27) {
                  s.target.value=""
                  this.onSearchChange(s)
                }
            }}
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