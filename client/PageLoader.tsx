import { Tailspin } from "@/components/layout/Tailspin"
import Image from "next/image"

const PageLoader = ({ information }: { information: string }) => {
  return (
    <div className="flex gap-5 flex-col items-center justify-center">
      <Image width={250} height={250} src="/logo.png" alt="Pixel Adventure Logo" />
      <h1>{information}</h1>
      <Tailspin size={50} />
    </div>
  )
}

export default PageLoader
