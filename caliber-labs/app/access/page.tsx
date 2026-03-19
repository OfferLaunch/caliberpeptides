import { redirect } from 'next/navigation'

type Props = {
  searchParams: Promise<{ next?: string }>
}

export default async function AccessPage({ searchParams }: Props) {
  const sp = await searchParams
  const raw = sp.next
  const next =
    typeof raw === 'string' && raw.startsWith('/') && !raw.startsWith('//')
      ? raw
      : '/'
  redirect(`/?access=true&next=${encodeURIComponent(next)}`)
}
