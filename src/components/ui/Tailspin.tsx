import { TailSpin } from "react-loader-spinner"

export const Tailspin = ({ size }: { size: number }) => {
  return (
    <TailSpin
      visible={true}
      height={size}
      width={size}
      color="#ffffff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass="" />
  )
}