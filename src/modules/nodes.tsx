import Image from "next/image";
import Link from "next/link";

const nexume = require('../../nexume.config')
const {
	width,
} = nexume;

/**
 * Main
 * 
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 */
const defaultMain = {
  paddingTop: 0,
  paddingBottom: 0,
}

interface Main {
  children: React.ReactNode,
  paddingTop?: number,
  paddingBottom?: number,
}

export function Main({
  children,
  paddingTop=defaultMain.paddingTop,
  paddingBottom=defaultMain.paddingBottom,
}: Main) {
  return (
    <main className={`pt-${paddingTop} pb-${paddingBottom} w-full flex justify-center`}>
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
  paddingTop: 0,
  paddingBottom: 0,
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
  rounded: '',
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
      className={`relative shrink-0 overflow-hidden rounded-${rounded}`}
    >
      <Image src={src} alt="Profile image" fill priority={true} sizes="100%" className="object-cover"/>
    </div>
  )
}

/**
 * Profile info
 * 
 * margin: number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 */
const defaultProfileInfo = {
  marginLeft: 0,
  marginRight: 0,
}

interface ProfileInfo {
  children: React.ReactNode,
  marginLeft?: number,
  marginRight?: number,
}

export function ProfileInfo({
  children,
  marginLeft=defaultProfileInfo.marginLeft,
  marginRight=defaultProfileInfo.marginRight,
}: ProfileInfo) {
  return (
    <div className={`flex flex-col ml-${marginLeft} mr-${marginRight}`}>
      {children}
    </div>
  )
}

/**
 * Info
 * 
 * margin:     number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 * icon:       string web|github|linkedin|facebook|instagram|address|phone
 * iconEffect: boolean
 */
const defaultInfo = {
  marginTop: 0,
  marginBottom: 0,
  icon: '',
  iconEffect: false,
}

interface Info {
  children: React.ReactNode,
  marginTop?: number,
  marginBottom?: number,
  icon?: string,
  iconEffect?: boolean,
}

export function Info({
  children,
  marginTop=defaultInfo.marginTop,
  marginBottom=defaultInfo.marginBottom,
  icon=defaultInfo.icon,
  iconEffect=defaultInfo.iconEffect,
}: Info) {
  return (
    <div className={`mt-${marginTop} mb-${marginBottom} relative flex items-center gap-2 text-base text-l-600 group`}>
      {
        icon !== '' && 
          <div className='relative'>
            { iconEffect && <i className="fa-solid fa-angle-right absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 duration-200"></i> }
            <div className={iconEffect ? 'group-hover:scale-0 group-hover:opacity-0 duration-200' : ''}>
              {
                icon === 'web'
                ? <i className="fa-solid fa-earth-asia"></i>
                : icon === 'github'
                  ? <i className="fa-brands fa-github"></i>
                  : icon === 'linkedin'
                    ? <i className="fa-brands fa-linkedin-in mr-0.5"></i>
                    : icon === 'facebook'
                      ? <i className="fa-brands fa-square-facebook mr-0.5"></i>
                      : icon === 'instagram'
                        ? <i className="fa-brands fa-instagram mr-0.5"></i>
                        : icon === 'address'
                          ? <i className="fa-regular fa-compass"></i>
                          : icon === 'phone'
                            ? <i className="fa-solid fa-headset"></i>
                            : icon === 'email'
                              ? <i className="fa-solid fa-at"></i>
                              : <></>
              }
            </div>
          </div>
      }
      <div>{children}</div>
    </div>
  )
}

/**
 * Skill Set
 */
interface SkillSet {
  children: React.ReactNode,
}

export function SkillSet({
  children
}: SkillSet) {
  return (
    <div>

    </div>
  )
}

/**
 * Callout1
 * 
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 * margin:  number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 * rounded: string *none|sm|md|lg|full
 */
const defaultCallout1 = {
  paddingX: 10,
  paddingY: 10,
  marginTop: 0,
  marginBottom: 0,
  rounded: '',
}

interface Callout1 {
  children: React.ReactNode,
  paddingX?: number,
  paddingY?: number,
  marginTop?: number,
  marginBottom?: number,
  rounded?: string,
}

export function Callout1({
  children,
  paddingX=defaultCallout1.paddingX,
  paddingY=defaultCallout1.paddingY,
  marginTop=defaultCallout1.marginTop,
  marginBottom=defaultCallout1.marginBottom,
  rounded=defaultCallout1.rounded,
}: Callout1) {
  return (
    <div className={`px-${paddingX} py-${paddingY} mt-${marginTop} mb-${marginBottom} rounded-${rounded} border-2 border-h-main/50 bg-h-main/10`}>{children}</div>
  )
}

/**
 * Callout2
 * 
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 * margin:  number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 * rounded: string *none|sm|md|lg|full
 */
const defaultCallout2 = {
  paddingX: 10,
  paddingY: 10,
  marginTop: 0,
  marginBottom: 0,
  rounded: '',
}

interface Callout2 {
  children: React.ReactNode,
  paddingX?: number,
  paddingY?: number,
  marginTop?: number,
  marginBottom?: number,
  rounded?: string,
}

export function Callout2({
  children,
  paddingX=defaultCallout2.paddingX,
  paddingY=defaultCallout2.paddingY,
  marginTop=defaultCallout2.marginTop,
  marginBottom=defaultCallout2.marginBottom,
  rounded=defaultCallout2.rounded,
}: Callout2) {
  return (
    <div className={`px-${paddingX} py-${paddingY} mt-${marginTop} mb-${marginBottom} rounded-${rounded} border-2 border-l-500/50 bg-l-300/30`}>{children}</div>
  )
}

/**
 * Heading
 * 
 * fontSize:   string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 * fontWeight: string *Compatible only with font-weight properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 */
const defaultHeading = {
  fontSize: '4xl',
  fontWeight: 'semibold',
  marginTop: 0,
  marginBottom: 0,
}

interface Heading {
  children: React.ReactNode,
  fontSize?: string,
  fontWeight?: string,
  marginTop?: number,
  marginBottom?: number,
}

export function Heading({
  children,
  fontSize=defaultHeading.fontSize,
  fontWeight=defaultHeading.fontWeight,
  marginTop=defaultHeading.marginTop,
  marginBottom=defaultHeading.marginBottom,
}: Heading) {
  return (
    <h1 className={`text-${fontSize} font-${fontWeight} mt-${marginTop} mb-${marginBottom} text-l-700`}>
      {children}
    </h1>
  )
}

/**
 * Paragraph
 * 
 * fontSize:      string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 * fontWeight:    string *Compatible only with font-weight properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 * letterSpacing: string *Compatible only with Letter Spacing properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 * wordBreak:     string break|keep
 * margin:        number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 */
const defaultParagraph = {
  fontSize: 'base',
  fontWeight: 'normal',
  letterSpacing: 'wide',
  wordBreak: 'break',
  marginTop: 0,
  marginBottom: 0,
}

interface Paragraph {
  children: React.ReactNode,
  fontSize?: string,
  fontWeight?: string,
  letterSpacing?: string,
  wordBreak?: string,
  marginTop?: number,
  marginBottom?: number,
}

export function Paragraph({
  children,
  fontSize=defaultParagraph.fontSize,
  fontWeight=defaultParagraph.fontWeight,
  letterSpacing=defaultParagraph.letterSpacing,
  wordBreak=defaultParagraph.wordBreak,
  marginTop=defaultParagraph.marginTop,
  marginBottom=defaultParagraph.marginBottom,
}: Paragraph) {
  return (
    <p className={`text-${fontSize} font-${fontWeight} tracking-${letterSpacing} ${wordBreak === 'keep' ? 'break-keep' : 'break-all'} mt-${marginTop} mb-${marginBottom} text-l-600`}>
      {children}
    </p>
  )
}

/**
 * Anchor
 * 
 * href:   string
 * target: string
 */
const defaultAnchor = {
  target: '_self',
}

interface Anchor {
  children: React.ReactNode,
  href: string,
  target?: string,
}
export function Anchor({
  children,
  href,
  target=defaultAnchor.target,
}: Anchor) {
  return (
    <Link
      href={href}
      target={target}
      className="group"
    >
      <span className="border-b border-h-transparent group-hover:border-h-main group-hover:text-h-main duration-200">{children}</span>
      <i className="fa-solid fa-link ml-1 text-xs group-hover:text-h-main duration-200"></i>
    </Link>
  )
}