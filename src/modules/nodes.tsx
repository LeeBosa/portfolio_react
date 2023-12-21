import Image from "next/image";

const nexume = require('../../nexume.config')
const {
	width,
  themeColor,
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
 * 
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 * border:  boolean *If true, border-bottom will be applied.
 */
const defaultProfile = {
  paddingTop: 16,
  paddingBottom: 8,
}

interface Profile {
  children: React.ReactNode,
  paddingTop?: number,
  paddingBottom?: number,
}

export function Profile({
  children,
  paddingTop=defaultProfile.paddingTop,
  paddingBottom=defaultProfile.paddingBottom,
}: Profile) {
  return (
    <div
      className={`flex pt-${paddingTop} pb-${paddingBottom} border-b border-l-300`}
    >
      {children}
    </div>
  )
}

/**
 * Profile image
 * 
 * src:     string
 * width:   number
 * rounded: string *none|sm|md|lg|full
 */
const defaultProfileImg = {
  width: 220,
  rounded: "lg",
}

interface ProfileImg {
  src: string,
  width?: number,
  rounded?: string,
}

export function ProfileImg({
  src,
  width=defaultProfileImg.width,
  rounded=defaultProfileImg.rounded,
}: ProfileImg) {
  return (
    <div
      style={{
        width: width,
        height: width,
      }}
      className={`relative shrink-0 overflow-hidden ${
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

/**
 * Profile info
 * 
 * marginLeft: number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 */
const defaultProfileInfo = {
  marginLeft: 16,
}

interface ProfileInfo {
  children: React.ReactNode,
  marginLeft?: number,
}

export function ProfileInfo({
  children,
  marginLeft=defaultProfileInfo.marginLeft,
}: ProfileInfo) {
  return (
    <div className={`flex flex-col ml-${marginLeft}`}>
      {children}
    </div>
  )
}

/**
 * Heading 1
 * 
 * fontSize:   string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 * fontWeight: string *Compatible only with font-weight properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 */
const defaultH1 = {
  fontSize: "4xl",
  fontWeight: 'semibold'
}

interface H1 {
  children: React.ReactNode,
  fontSize?: string,
  fontWeight?: string,
}

export function H1({
  children,
  fontSize=defaultH1.fontSize,
  fontWeight=defaultH1.fontWeight,
}: H1) {
  return (
    <h1 className={`text-${fontSize} font-${fontWeight} text-l-600`}>
      {children}
    </h1>
  )
}

/**
 * Paragraph 1
 * 
 * fontSize:   string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 * fontWeight: string *Compatible only with font-weight properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 * marginTop:  number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 */
const defaultP1 = {
  fontSize: "xl",
  fontWeight: 'normal',
  marginTop: 0,
}

interface P1 {
  children: React.ReactNode,
  fontSize?: string,
  fontWeight?: string,
  marginTop?: number,
}

export function P1({
  children,
  fontSize=defaultP1.fontSize,
  fontWeight=defaultP1.fontWeight,
  marginTop=defaultP1.marginTop,
}: P1) {
  return (
    <p className={`text-${fontSize} font-${fontWeight} mt-${marginTop} text-l-500`}>
      {children}
    </p>
  )
}