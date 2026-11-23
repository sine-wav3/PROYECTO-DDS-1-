import { createClient } from '@/utils/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('instruments').select('*')

  return (
    <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
  )
}