import Image from "next/image";

const nexume = require('../../nexume.config')
const {
	width
} = nexume;

/**
 * Main
 */
export function Main({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='w-full flex justify-center'>
      <div style={{maxWidth: width}} className="w-full flex flex-col">
        {children}
      </div>
    </main>
  )
}

/**
 * Profile
 */
export function Profile({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}

/**
 * Image
 * 
 * src: string
 * width: number
 * rounded: string *none|sm|md|lg|full
 */
const defaultImg = {
  width: 200,
  rounded: "lg",
}

interface Img {
  src: string,
  width?: number,
  rounded?: string,
}

export function Img({
  src,
  width=defaultImg.width,
  rounded=defaultImg.rounded,
}: Img) {
  return (
    <div
      style={{
        width: width,
        height: width,
      }}
      className={`relative overflow-hidden ${
        rounded ===  "sm" 
          ? "rounded-sm" 
          : rounded === "md"
            ? "rounded-md"
              : rounded === "lg"
                ? "rounded-lg"
                  : rounded === "full"
                    ? "rounded-full"
                    : ""
      }`}
    >
      <Image src={src} alt="Profile image" fill priority={true} sizes="100%" className="object-cover"/>
    </div>
  )
}