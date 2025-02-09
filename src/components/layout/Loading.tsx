import { useEffect, useState } from "react"

export const Loading = ({ loaded, text }: { loaded: boolean, text: string }) => {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined

    if (loaded) {
      if (timeout) {
        clearTimeout(timeout)
      }
      return
    } else {
      timeout = setTimeout(() => {
        setShowMessage(true)
      }, 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [loaded])

  return (
    <main className="w-full h-full flex flex-col gap-2 items-center justify-center">
      {showMessage && (
        <h1 className="mt-10 max-w-[350px] text-wrap text-center message-slow-appear">{text}</h1>
      )}
    </main>
  )
}