import type { NexumeConfig } from "@/dist/types"
import Image from "next/image"

export default function Side({
  nexume
}: {
  nexume: NexumeConfig
}) {
  return (
    <div className={`${nexume.showSidebar ? 'block' : 'hidden'} w-72 min-h-screen px-6 py-12 flex justify-center items-start shrink-0 bg-l-200`}>
        <div className={`w-${nexume.profileImgSize} h-${nexume.profileImgSize} rounded-full relative overflow-hidden`}>
          <Image src={nexume.profileImg} layout="fill" alt="Sidebar profile image" className="object-cover"/>
        </div>
    </div>
  )
}
  