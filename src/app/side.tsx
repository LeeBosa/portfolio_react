import type { NexumeConfig } from "@/dist/types"

export default function Side({
  nexume
}: {
  nexume: NexumeConfig
}) {
  return (
    <div className={`${nexume.show ? 'block' : 'hidden'} w-10 min-h-[100vh]`}>

    </div>
  )
}
  