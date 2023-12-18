import Image from "next/image"

const nexume = require('../../nexume.config')

export function Img() {
    return (
        <div className={`w-${nexume.profileImgSize} h-${nexume.profileImgSize} rounded-full relative overflow-hidden`}>
            <Image src={nexume.profileImg} layout="fill" alt="Sidebar profile image" className="object-cover"/>
        </div>
    )
}