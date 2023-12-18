import type { NexumeConfig } from "@/dist/types"
import * as Node from '@/modules/nodes'

export default function Side({
  nexume
}: {
  nexume: NexumeConfig
}) {
  return (
    <div className={`${nexume.showSidebar ? 'block' : 'hidden'} w-72 min-h-screen px-6 py-12 flex justify-center items-start shrink-0 bg-l-200`}>
        <Node.Img/>
    </div>
  )
}
  