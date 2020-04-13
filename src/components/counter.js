import React, { useState } from 'react'

const Counter = (props) => {
  const [count, setCount] = useState(0)
return <div className="counter">
  <h3>Click the button if you like the post</h3>
  <button onClick={() => setCount(count + 1)}>Click me</button>
  <h3>{count} likes</h3>
</div>
}

export default Counter
