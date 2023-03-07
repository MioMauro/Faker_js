'use client'
import { generateFakeUsers } from "@/utils/generateFakeUsers"
import { useState, useEffect } from "react"
import { Card } from "@/components/Card"

export default function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    const loadData = generateFakeUsers(4)
    setData(loadData)
  }, [])

  return (
    <main className="bg-gray-700 mx-auto min-h-screen items-center justify-center">
      <div className="p-12" >
      <h1 className="text-center text-3xl p-4">Users &#40;reload for new users&#41;</h1>
      
      <div className="flex flex-col space-y-4">
        {data.map((item, idx) => {
          return (
          //<p key={idx} className="">{item.fullName}</p>
          <Card
            key={idx}
            fullName={item.fullName}
            job={item.job}
            avatar={item.avatar}
          />
          )
        })}
      </div>

      </div>
    </main>
  )
}
