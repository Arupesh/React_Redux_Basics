import React from "react";
import {connect} from "react-redux";

export const Main = (props) => {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUsername('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );

};

// const mapStateToProps = (state) => {
//   console.log("mapStateToProps2 clicked >>", )
//   return{
//     //state: this.props
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return{
//     changeUsername : (name) => {
//       console.log("ChangeUSerName clicked >>", name)
//       dispatch({
//         type : "SET_NAME",
//         payload : name
//       });
//     }
//   };
// };

//export default connect(mapStateToProps, mapDispatchToProps)(Main);
