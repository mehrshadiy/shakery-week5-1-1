import { Inter } from 'next/font/google'
import {useState} from "react";
import {Message} from "@/components/Message";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [counter, setCounter] = useState<number>(1)
  const [showMessage, setShowMessage] = useState<boolean>(true)

  const incClickHandler = () => {
    setCounter(prevState => prevState + 1)
  }
  const toggleClickHandler = () => {
    setShowMessage(prevState => !prevState)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ul>
        <li>
          {counter}
        </li>
        <li>2</li>
        <li>3</li>
        <li>
          {showMessage && <Message msg={"hello"}/>}
        </li>
      </ul>

      <button className={'p-3 mt-5 border rounded text-green-800'} onClick={incClickHandler}>inc counter</button>
      <button className={'p-3 mt-5 border rounded text-green-800'} onClick={toggleClickHandler}>toggle show message</button>
    </main>
  )
}
