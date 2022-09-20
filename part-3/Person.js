const Person = (props) => {
  let text = props.age < 18 ? "you must be 18" : "please go vote!"
  let name = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
  let hobbies = props.hobbies.map(h => <li>{h}</li>)
  return (
    <div>
      <p>
        <b>Learn some information about this person</b>
      </p>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Age:</b> {props.age}
      </p>
      <p>
        <b>Hobbies: </b>{hobbies}
      </p>
      <p>
        <h3>{text}</h3>
      </p>

    </div>
  )
}