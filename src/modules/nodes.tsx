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

export function ProfileImg() {
	return (
		<div className={`w-${profileImgSize} h-${profileImgSize} rounded-${profileImgRadius} relative overflow-hidden`}>
			<Image src={profileImgUrl} fill sizes="100%" priority={true} alt="Sidebar profile image" className="object-cover"/>
		</div>
	)
}

export function ProfileName({
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