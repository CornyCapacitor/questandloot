import Image from 'next/image'

export const Logo = ({ size }: { size: number }) => {
  return (
    <Image src="/logo.png" width={size} height={size} alt="Quest & Loot logo" unoptimized />
  )
}