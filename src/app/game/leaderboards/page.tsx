'use client'

import { Profession } from "@/app/types"
import { Tabs } from "@/components/leaderboards/Tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { errorToast } from "@/components/ui/toasts"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
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
  const [totalPages, setTotalPages] = useState<number | null>(null)
  const [totalCharacters, setTotalCharacters] = useState<number | null>(null)
  const [page, setPage] = useState(1)

  const SERVER_URI = process.env.NEXT_PUBLIC_SERVER_REST

  const getCharacters = async (page: number) => {
    const limit = 1

    try {
      const response = await fetch(`${SERVER_URI}/api/characters?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })

      if (!response.ok) {
        const data = await response.json()

        if (response.status === 429) {
          errorToast({ text: "Please, spare some electricity for game server; wait at least few seconds before another page change" })
          return
        }

        errorToast({ text: `Failed to fetch leaderboards, ${data.error}` })
        return
      }

      const data = await response.json() as _Response
      console.log(data)

      setCharacters(data.data)
      setTotalCharacters(data.totalCharacters)
      setTotalPages(data.totalPages)
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    getCharacters(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (characters && totalPages) return (
    <div className="w-full h-full flex flex-col flex-wrap justify-start items-center py-2 overflow-y-auto">
      <span className="text-start flex w-full px-4 pb-1 text-sm">Total players: {totalCharacters}</span>
      <Tabs setCurrentPage={setPage} currentPage={page} totalPages={totalPages} />
      <Table>
        <TableHeader>
          <TableRow className="flex w-full">
            <TableHead className="min-w-[150px] flex-1 items-center flex">Name</TableHead>
            <TableHead className="min-w-[150px] flex-1 items-center flex">Title</TableHead>
            <TableHead className="min-w-[150px] flex-1 items-center flex">Level</TableHead>
            <TableHead className="min-w-[150px] flex-1 items-center flex">Profession</TableHead>
            <TableHead className="min-w-[150px] flex-1 items-center flex">Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {characters.map((character, index) => (
            <TableRow key={index} className="flex w-full">
              <TableCell className="min-w-[150px] flex-1">{character.name}</TableCell>
              <TableCell className="min-w-[150px] flex-1">{character.title || 'No title'}</TableCell>
              <TableCell className="min-w-[150px] flex-1">{character.level}</TableCell>
              <TableCell className="min-w-[150px] flex-1">{character.profession}</TableCell>
              <TableCell className="min-w-[150px] flex-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>Img</TooltipTrigger>
                    <TooltipContent className="max-w-[350px]">{character.description || 'This player has no description set yet'}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LeaderboardsPage
