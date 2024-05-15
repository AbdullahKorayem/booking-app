import { notFound } from "next/navigation"

type Props = {
    searchParams: SearchParams
}

type SearchParams = {
    url: URL,
    ss: string,
    checkin: string,
    checkout: string,
    group_adults: string,
    group_children: string,
    no_rooms: string
}

export default async function page({ searchParams }: Props) {
    if (!searchParams) return notFound()

    // const result=await fetchResults(searchParams)

    if(!result) return <div>No results....</div>
    return (
        <div>

        </div>
    )
}

