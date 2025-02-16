'use client'

import { Profession } from "@/app/types"
import { errorToast } from "@/components/ui/toasts"
import { useEffect, useState } from "react"

type CharacterRecord = {
  name: string,
  title: string | null,
  description: string | null,
  profession: Profession,
  level: number
}

type _Response = {
  data: CharacterRecord[],
  currentPage: number,
  totalPages: number,
  totalCharacters: number,
  perPage: number
}

const LeaderboardsPage = () => {
  const [characters, setCharacters] = useState<CharacterRecord[]>([])
  const [page, setPage] = useState(1)

  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_REST

  const getCharacters = async (page: number) => {
    try {
      const response = await fetch(`${SERVER_URI}/api/characters?page=${page}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      if (!response.ok) {
        const data = await response.json()
        errorToast({ text: `Failed to fetch leaderboards, ${data.error}` })
        return
      }

      const data = await response.json() as _Response
      console.log(data)

      setCharacters(data.data)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getCharacters(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="w-full h-full flex flex-col flex-wrap justify-center items-center p-2 gap-2 overflow-y-auto">
      <div className="flex flex-col w-full">
        {characters.map((character, index) => (
          <div key={index} className="flex justify-between">
            <h1>{character.name}</h1>
            <h2>{character.description || 'No description'}</h2>
            <h3>{character.title || 'No title'}</h3>
            <h4>{character.level}</h4>
            <h5>{character.profession}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaderboardsPage
