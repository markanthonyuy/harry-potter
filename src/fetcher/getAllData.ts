export const getAllData = async () => {
  const res = await fetch(`https://hp-api.onrender.com/api/characters`)
  return res.json()
}
