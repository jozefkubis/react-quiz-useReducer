function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const percentage = (points / maxPossiblePoints) * 100

  let emoji
  if (percentage === 100) emoji = "🥇"
  if (percentage >= 70) emoji = "🎉"
  if (percentage >= 40) emoji = "🙂"
  if (percentage < 40) emoji = "🤦‍♂️"

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>

      <p className="highscore">(Highscore: {highscore} points)</p>
    </>
  )
}

export default FinishScreen
