import type { NexumeConfig } from "@/dist/types"
import * as Node from '@/modules/nodes'

export default function Side({
  nexume
}: {
  nexume: NexumeConfig
}) {
  const {
    showSidebar,
    sidebarWidth,
    sidebarPadding,
    sidebarBorder,
    sidebarColor,
  } = nexume;

  return (
    <div 
      style={sidebarBorder ? {borderColor: sidebarColor} : {backgroundColor: sidebarColor}}
      className={`${showSidebar ? 'flex' : 'hidden'} ${sidebarBorder && 'border-r'} w-${sidebarWidth} min-h-screen px-${sidebarPadding[0]} py-${sidebarPadding[1]} flex-col justify-start items-center shrink-0`}
    >
      <Node.ProfileImg/>
      <Node.ProfileName>Jane Doe</Node.ProfileName>
    </div>
  )
}
