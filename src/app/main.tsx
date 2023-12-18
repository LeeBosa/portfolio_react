import type { NexumeConfig } from "@/dist/types"

const Main = ({
  nexume
}: {
  nexume: NexumeConfig
}) => {
  return (
    <div className="w-full min-h-screen">
        
    </div>
  )
}

export async function getStaticProps(ctx: any) {
  try {
    return {
        props: {}
    }
  } catch (error) {
    console.log(error);
  }
}

export default Main