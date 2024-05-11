export const getData = async (id: string) => {
  const res = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
  return res.json()
}
