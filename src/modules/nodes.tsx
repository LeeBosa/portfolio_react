import { defaultHead } from "next/head"
import Image from "next/image"
import Link from "next/link"

const nexume = require('../../nexume.config')
const {
	width,
} = nexume

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

export const Main = ({
  children,
  paddingTop=defaultMain.paddingTop,
  paddingBottom=defaultMain.paddingBottom,
}: Main) => {
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
const defaultIconProvider = {
  marginTop: 0,
  marginBottom: 0,
  icon: '',
  iconEffect: false,
}

interface IconProvider {
  children: React.ReactNode,
  marginTop?: number,
  marginBottom?: number,
  icon?: string,
  iconEffect?: boolean,
}

export function IconProvider({
  children,
  marginTop=defaultIconProvider.marginTop,
  marginBottom=defaultIconProvider.marginBottom,
  icon=defaultIconProvider.icon,
  iconEffect=defaultIconProvider.iconEffect,
}: IconProvider) {
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
 * Callout
 * 
 * color:   string *default|main
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 * margin:  number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 * rounded: string *none|sm|md|lg|full
 */
const defaultCallout = {
  color: 'default',
  paddingX: 10,
  paddingY: 10,
  marginTop: 0,
  marginBottom: 0,
  rounded: '',
}

interface Callout {
  children: React.ReactNode,
  color?: string,
  paddingX?: number,
  paddingY?: number,
  marginTop?: number,
  marginBottom?: number,
  rounded?: string,
}

export function Callout({
  children,
  paddingX=defaultCallout.paddingX,
  paddingY=defaultCallout.paddingY,
  marginTop=defaultCallout.marginTop,
  marginBottom=defaultCallout.marginBottom,
  rounded=defaultCallout.rounded,
  color=defaultCallout.color,
}: Callout) {
  return (
    <div className={`px-${paddingX} py-${paddingY} mt-${marginTop} mb-${marginBottom} rounded-${rounded} border-2 ${color === 'default' ? 'border-l-500/50 bg-l-300/30' : 'border-h-main/50 bg-h-main/10'}`}>{children}</div>
  )
}

/**
 * Heading
 * 
 * tooltip:    boolean
 * tooltipMsg: string
 * fontSize:   string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 * fontWeight: string *Compatible only with font-weight properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 * margin:     number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 */
const defaultHeading = {
  tooltip: false,
  tooltipMsg: '',
  fontSize: '3xl',
  fontWeight: 'semibold',
  marginTop: 0,
  marginBottom: 0,
}

interface Heading {
  children: React.ReactNode,
  tooltip?: boolean,
  tooltipMsg?: string,
  fontSize?: string,
  fontWeight?: string,
  marginTop?: number,
  marginBottom?: number,
}

export function Heading({
  children,
  tooltip=defaultHeading.tooltip,
  tooltipMsg=defaultHeading.tooltipMsg,
  fontSize=defaultHeading.fontSize,
  fontWeight=defaultHeading.fontWeight,
  marginTop=defaultHeading.marginTop,
  marginBottom=defaultHeading.marginBottom,
}: Heading) {
  return (
    <h1 className={`text-${fontSize} font-${fontWeight} mt-${marginTop} mb-${marginBottom} flex gap-2.5 text-l-700`}>
      {children}
      {
        tooltip &&
          <div className="relative cursor-pointer group">
            <i className="fa-solid fa-circle-question absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 duration-200"></i>
            <i className="fa-regular fa-circle-question group-hover:scale-0 group-hover:opacity-0 duration-200"></i>
            {
              tooltipMsg !== '' &&
                <div className="w-max text-xs font-normal tracking-wide pl-3.5 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 invisible group-hover:visible">
                  <div className="w-full px-3.5 py-2 rounded-lg text-l-100 bg-l-700 origin-left scale-0 -translate-x-3 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 duration-200">
                    <div dangerouslySetInnerHTML={{__html: tooltipMsg}}></div>
                    <div className="w-2.5 h-2.5 rotate-45 absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-l-700"></div>
                  </div>
                </div>
            }
          </div>
      }
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
      className="group text-h-main"
    >
      <span className="rounded-md border-2 border-h-transparent group-hover:border-h-main group-focus:border-h-main duration-200">{children}</span>
      <i className="fa-solid fa-link ml-1 text-xs"></i>
    </Link>
  )
}