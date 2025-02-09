import Image from 'next/image'

const IconSpinner = ({ icon, size }: { icon: string, size: number }) => {
  return (
    <Image src={icon} width={size} height={size} alt="Loading spinner" className="spinner-icon-scale spinner-icon-spin" unoptimized />
  )
}

export default IconSpinner
