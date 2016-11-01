import React from 'react';
class App extends React.Component {
  constructor(){
    super();
    this.state = {data: [
        {id: 1, name: "Simon Baily"},{id: 2, name: "Thomas Burleson"},
        {id: 3, name: "will Button"},{id: 4, name: "Ben Clinkinbeard"},
        {id: 5, name: "Kent Dodds"},{id: 6, name: "Trevor Ewen"},
        {id: 7, name: "Aaron Frost"},{id: 8, name: "Joel Hooks"},
        {id: 9, name: "Jafar Husain"},{id: 10, name: "Tim Kindberg"}
    ]}
  }

  render(){
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    })
    return <table>
      <tbody>{rows}</tbody>
    </table>
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App
