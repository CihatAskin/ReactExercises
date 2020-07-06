import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>CategoryList</h3>
        <h5>Seçili kategori : {this.props.currentCategory.name} </h5>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("mapStateToProps: ", state)
  return { currentCategory: state.changeCategoryReducer };
}
export default connect(mapStateToProps)(CategoryList);
