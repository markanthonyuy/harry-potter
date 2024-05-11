export type TWand = { wood: string; core: string; length: number }

export type TCharacter = {
  actor: string
  alive: boolean
  alternate_actors: string[]
  alternate_names: string[]
  ancestry: string
  dateOfBirth: string | null
  eyeColour: string
  gender: string
  hairColour: string
  hogwartsStaff: boolean
  hogwartsStudent: boolean
  house: string
  id: string
  image: string
  name: string
  patronus: string
  species: string
  wand: TWand
  wizard: boolean
  yearOfBirth: number
}
