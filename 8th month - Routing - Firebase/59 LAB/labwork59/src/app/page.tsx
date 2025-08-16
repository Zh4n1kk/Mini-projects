'use client'
import SendMessageForm from "@/Components/SendMessageForm/SendMessageForm";
import { baseUrl } from "@/constants/baseUrl";
import { useEffect, useState } from "react";

type Message = {
  author: string
  message: string
  datetime: string
}
export default function Home() {

  const [messages, updateMessages] = useState<Message[]>([])
  const [dateTime, setDateTime] = useState<Date | null>(null)

  const refreshData = async() => {
    const request = await fetch(baseUrl)
    const result = await request.json()
    const sorted = result.slice(-20).sort((b: Message, a:Message) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
    setDateTime(new Date(sorted[0].datetime))
    if (!dateTime || dateTime.getTime() !== new Date(sorted[0].datetime).getTime()) {
      updateMessages(sorted)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      refreshData()
    }, 3000);

    return () => {
      clearInterval(interval)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
    <SendMessageForm/>
    <div className="flex flex-col container">
      {messages.map((el) => {
        return <div className={`flex flex-col border-1 border-white w-[500px]`} key={el.datetime}>
          <p>Name: {el.author}</p>
          <p>Message: {el.message}</p>
          <p>Date: {new Date(el.datetime).toLocaleDateString()} {new Date(el.datetime).toLocaleTimeString('ru-RU')}</p>
          </div>
      })}
    </div>
    </>
  );
}
