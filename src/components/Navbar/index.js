const Navbar = props => {
  const {scoreDetails} = props
  const {score, time} = scoreDetails

  return (
    <nav className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="top-image"
        alt="website logo"
      />
      <ul className="score-div">
        <li className="score-name">
          <p>
            Score: <span className="score">{score}</span>
          </p>
        </li>
        <li className="score-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-img"
          />
          <p className="time">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
