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
 * Profile provider
 * 
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 * border:  boolean *If true, border-bottom will be applied.
 */
const defaultProfileProvider = {
  paddingTop: 0,
  paddingBottom: 0,
}

interface ProfileProvider {
  children: React.ReactNode,
  paddingTop?: number,
  paddingBottom?: number,
}

export function ProfileProvider({
  children,
  paddingTop=defaultProfileProvider.paddingTop,
  paddingBottom=defaultProfileProvider.paddingBottom,
}: ProfileProvider) {
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
 * Icon provider
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
 * Skill provider
 * 
 * padding: number *Compatible only with padding properties of tailwind CSS. Check out https://tailwindcss.com/docs/padding for details.
 */
const defaultSkillProvider = {
  paddingTop: 6,
  paddingBottom: 6,
}

interface SkillProvider {
  children: React.ReactNode,
  paddingTop?: number,
  paddingBottom?: number,
}

export function SkillProvider({
  children,
  paddingTop=defaultSkillProvider.paddingTop,
  paddingBottom=defaultSkillProvider.paddingBottom,
}: SkillProvider) {
  return (
    <div className={`w-full flex pt-${paddingTop} pb-${paddingBottom} border-b border-l-300`}>{children}</div>
  )
}

/**
 * Skill title
 * 
 * width:    number *Compatible only with width properties of tailwind CSS. Check out https://tailwindcss.com/docs/width for details.
 * fontSize: string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 */
const defaultSkillTitle = {
  fontSize: 'lg',
}

interface SkillTitle {
  children: React.ReactNode,
  fontSize?: string,
}

export function SkillTitle({
  children,
  fontSize=defaultSkillTitle.fontSize,
}: SkillTitle) {
  return (
    <div className={`w-44 shrink-0 text-${fontSize} text-l-700`}>{children}</div>
  )
}

/**
 * Skill list
 */
interface SkillList {
  children: React.ReactNode,
}

export function SkillList({
  children
}: SkillList) {
  return (
    <div className="flex flex-wrap gap-2">{children}</div>
  )
}

/**
 * Skill
 * 
 * icon: string *Compatible only with fontawesome icon name. Check out https://fontawesome.com/icons for details.
 * fill: boolean
 */
const defaultSkill = {
  icon: '',
  fill: false,
}

interface Skill {
  children: React.ReactNode,
  icon?: string,
  fill?: boolean,
}

export function Skill({
  children,
  icon=defaultSkill.icon,
  fill=defaultSkill.fill,
}: Skill) {
  return (
    <div className={`text-sm px-4 py-1 flex items-center gap-2.5 rounded-full ${fill ? 'border-2 border-h-main/50 bg-h-main/10 text-h-main' : 'border border-l-400 text-l-600'}`}>
      <div className='text-xl'>
        {
          icon === ''
            ? <i className="fa-solid fa-code text-lg"></i>
            : <i className={`fa-brands fa-${icon}`}></i>
        }
      </div>
      {children}
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
 * tooltip:     boolean
 * tooltipMsg:  string
 * period:      boolean
 * startPeriod: string YYYY-MM
 * endPeriod:   string YYYY-MM
 * fontSize:    string *Compatible only with font-size properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-size for details.
 * fontWeight:  string *Compatible only with font-weight properties of tailwind CSS. Check out https://tailwindcss.com/docs/font-weight for details.
 * margin:      number *Compatible only with margin properties of tailwind CSS. Check out https://tailwindcss.com/docs/margin for details.
 */
const defaultHeading = {
  tooltip: false,
  tooltipMsg: '',
  period: false,
  startPeriod: '',
  endPeriod: '',
  fontSize: '3xl',
  fontWeight: 'semibold',
  marginTop: 0,
  marginBottom: 0,
}

interface Heading {
  children: React.ReactNode,
  tooltip?: boolean,
  tooltipMsg?: string,
  period?: boolean,
  startPeriod?: string,
  endPeriod?: string,
  fontSize?: string,
  fontWeight?: string,
  marginTop?: number,
  marginBottom?: number,
}

export function Heading({
  children,
  tooltip=defaultHeading.tooltip,
  tooltipMsg=defaultHeading.tooltipMsg,
  period=defaultHeading.period,
  startPeriod=defaultHeading.startPeriod,
  endPeriod=defaultHeading.endPeriod,
  fontSize=defaultHeading.fontSize,
  fontWeight=defaultHeading.fontWeight,
  marginTop=defaultHeading.marginTop,
  marginBottom=defaultHeading.marginBottom,
}: Heading) {
  const getDateDiff = (d1: string, d2: string) => {
    const pattern = /^\d{4}-\d{2}$/
    const date = new Date()
    let d1y, d1m, d2y, d2m, dateDiff, yToM

    if (d1 !== '' && pattern.test(d1)) {
      d1y = Number(d1.split('-')[0])
      d1m = Number(d1.split('-')[1])

      if (d2 !== '' && pattern.test(d2)) {
        d2y = Number(d2.split('-')[0])
        d2m = Number(d2.split('-')[1])
      } else {
        d2y = date.getFullYear()
        d2m = date.getMonth()
      }
      
      yToM = d2y === d1y
        ? d2m - d1m
        : d2y - d1y === 1
          ? (13 - d1m) + d2m
          : ((d2y - d1y - 1) * 12) + (13 - d1m) + d2m
      dateDiff = (Math.ceil((yToM / 12) * 10) / 10).toString()

      return dateDiff.includes('.') ? (dateDiff.split('.')[0] + (dateDiff.split('.')[0] === '0' || dateDiff.split('.')[0] === '1' ? ' year ' : ' years ') + dateDiff.split('.')[1] + (dateDiff.split('.')[1] === '0' || dateDiff.split('.')[1] === '1' ? ' month' : ' months')) : (dateDiff + 'y')
    } else return ''
  }

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
                <div className="w-max text-xs font-normal pl-4 absolute right-0 top-1/2 translate-x-full -translate-y-1/2 invisible group-hover:visible">
                  <div className="w-full px-3.5 py-2 rounded-lg text-l-100 bg-l-700 origin-left scale-0 -translate-x-3 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:opacity-100 duration-200">
                    <div dangerouslySetInnerHTML={{__html: tooltipMsg}}></div>
                    <div className="w-2.5 h-2.5 rotate-45 absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-l-700"></div>
                  </div>
                </div>
            }
          </div>
      }
      {
        period &&
          <div className="flex items-center">
            <div className="text-sm font-normal tracking-wider flex items-center rounded-md overflow-hidden bg-l-600 text-l-100">
              <div className="px-2.5 py-1 text-l-100 bg-h-main">Total</div>
              <div className="px-3.5 py-1">
                { getDateDiff(startPeriod, endPeriod) !== '' && getDateDiff(startPeriod, endPeriod) }
              </div>
            </div>
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
      <span className="rounded-md border-2 border-h-transparent group-hover:border-h-main duration-200">{children}</span>
      <i className="fa-solid fa-link ml-1 text-xs"></i>
    </Link>
  )
}