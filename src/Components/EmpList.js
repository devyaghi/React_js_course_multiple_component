import React from "react";

export default class EmpList extends React.Component{

    render() {

        return (
            <table>
               <thead>
                  <th><td>ID</td><td>Name</td></th>
               </thead>
               <tbody>
                  <tr><td>1</td><td>Mohammed</td></tr>
                  <tr><td>1</td><td>Ali</td></tr>
                  <tr><td>1</td><td>Khalid</td></tr>
               </tbody>

            </table>
        )
    }

}