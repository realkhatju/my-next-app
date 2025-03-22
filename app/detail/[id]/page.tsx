import { FC } from 'react'

interface PageProps {
  params: {
    id: string
  }
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold">Detail Page: {params.id}</h1>
    </div>
  )
}

export default Page