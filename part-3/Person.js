const Person = function({name, age, hobbies}) {
    let voteText;
    if (age > 18) {
        voteText = "Go vote!"
    }
    else {
        voteText = "Go study!"
    }

    return (<div>
        <p>Learn some information about this person</p>

        <h3>{voteText}</h3>

        <div>Name: {name.slice(0, 6)}</div>
        <div>Age: {age}</div>
        <ul>Hobbies: {hobbies.map(h => <li>{h}</li>)}</ul>
    </div>)
}