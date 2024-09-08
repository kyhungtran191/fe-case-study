import React, { useEffect, useState } from 'react'

export default function App() {
  const [count, setCount] = useState(1)
  const [name, setName] = useState("")
  console.log("render1")
  const handleClick = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    console.log("callback")
    setName("Hello")
  }
  console.log("rerender")
  useEffect(() => {
    console.log("Run In useEffect")
    document.title = `Hello ${count}`
    console.log(count)
  }, [])
  console.log("Rerender - 3")
  return (
    <>
      <div onClick={handleClick}>click</div>
      <div>{count}</div>
    </>
  )
}
