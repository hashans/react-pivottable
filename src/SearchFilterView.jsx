import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

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
    let closeIcon = document.querySelector('.close-icon');
    if (s.target.value.length > 1) {
      closeIcon.classList.add('close-icon-show');
    } else if (document.querySelector('.close-icon-show')) {
      closeIcon.classList.remove('close-icon-show');
    }
    if(s.target.value && s.target.value.length > 0) {
      this.props.onSearchChange(s.target.value)
    } else {
      this.props.onSearchChange(document.querySelector('.pvtSearch').value);
    }

  }

  clearSearch(s) {
    if(s.target.value && s.target.value.length > 0) {
      s.target.value = "";
    } else {
      document.querySelector('.pvtSearch').value = "";
    }

  }

  render() {
    return (
      <div>
        <Col className="col-md-2 pull-left">
          <input
            value={this.props.searchValue}
            className= "pvtDropdownValue pvtDropdownCurrent pvtSearch"
            placeholder= "Search"
            onKeyUp={ s => {
              let code = s.charCode || s.keyCode;
                if (code === 27) {
                  this.clearSearch(s);
                  this.onSearchChange(s);
                }
            }}
            onChange= { s => {
              this.onSearchChange(s)
            }}>
          </input>
          <button class="close-icon" type="reset"
                  onClick={ s => {
                    this.clearSearch(s);
                    this.onSearchChange(s);
                  }
                }>
          </button>
        </Col>
      </div>
    );
  }

}

export default SearchFilter;