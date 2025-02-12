import GameButton from "@/components/ui/GameButton"
import Link from "next/link"

const SettingPage = () => {
  return (
    <div className="w-full h-full flex flex-col flex-wrap justify-center items-center p-2 gap-2 overflow-y-auto">
      <div className="w-[350px] flex flex-col gap-2 rounded-md p-2 border bg-slate-800 border-slate-700">
        <Link href="/game/settings/portrait">
          <GameButton className="w-full">Change portrait</GameButton>
        </Link>
        <Link href="/game/settings/password-reset">
          <GameButton className="w-full">Reset password</GameButton>
        </Link>
        <GameButton className="w-full text-red-500">Delete account</GameButton>
      </div>
    </div>
  )
}

export default SettingPage
