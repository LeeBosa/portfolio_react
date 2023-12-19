import Image from "next/image"

const nexume = require('../../nexume.config')

const {
	profileImgSize,
	profileImgUrl,
	profileImgRadius,
  profileNameWidth,
  profileNameColor,
  profileNameFontSize,
} = nexume;

export function Main() {
  return (
    <div className="w-full min-h-screen">
        
    </div>
  )
}

export function Side({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div
      // style={sidebarBorder ? {borderColor: sidebarColor} : {backgroundColor: sidebarColor}}
      // className={`${showSidebar ? 'flex' : 'hidden'} ${sidebarBorder && 'border-r'} w-${sidebarWidth} min-h-screen px-${sidebarPadding[0]} py-${sidebarPadding[1]} flex-col justify-start items-center shrink-0`}
    >
      {children}
    </div>
  )
}

export function Img() {
	return (
		<div className={`w-${profileImgSize} h-${profileImgSize} rounded-${profileImgRadius} relative overflow-hidden`}>
			<Image src={profileImgUrl} fill sizes="100%" priority={true} alt="Sidebar profile image" className="object-cover"/>
		</div>
	)
}

export function Name({
	children
}: {
	children: React.ReactNode,
}) {
	return (
		<div
      style={{color: profileNameColor}}
      className={`w-${profileNameWidth} text-${profileNameFontSize}`}
    >
			{children}
		</div>
	)
}