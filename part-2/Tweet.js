function Tweet({username, name, date, message}) {
    return <div className="tweet">
        <div className="username">{username}</div>
        <div className="name">{name}</div>
        <div className="date">{date}</div>
        <p className="message">{message}</p>
    </div>
}