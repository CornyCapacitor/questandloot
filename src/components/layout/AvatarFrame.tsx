import Image from 'next/image'

const AvatarFrame = ({ image, size, inverted }: { image: string, size: number, inverted: boolean }) => {
  const borderSize = size * (236 / 126)
  const backgroundSize = size * (146 / 126)
  const imageSize = size

  return (
    <div className={`flex items-center justify-center relative`} style={{ width: `${borderSize}px`, height: `${borderSize}px` }}>
      <Image src="/stonebrick_border.png" width={borderSize} height={borderSize} alt="Stonebrick Border" className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" />
      <div className={`flex items-center justify-center bg-cover bg-center w-[136px] h-[136px]`}>
        <Image src="/stonebrick_background.jpg" width={backgroundSize} height={backgroundSize} alt="Stonebrick Background" className="absolute opacity-50" />
        <Image src={image} width={imageSize} height={imageSize} alt="Character Image" className={`z-10 ${inverted ? 'invertX' : ''}`} />
      </div>
    </div>
  )
}

export default AvatarFrame
