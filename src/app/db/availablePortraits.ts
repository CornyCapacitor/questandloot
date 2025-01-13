export type Portrait = {
  name: string,
  path: string,
  race: string
}

export type Race = Portrait[]

export const portraits: Record<string, Portrait[]> = {
  dwarf: [
    { name: 'Dwarf 1', path: 'dwarf1.png', race: 'dwarf' },
    { name: 'Dwarf 2', path: 'dwarf2.png', race: 'dwarf' },
    { name: 'Dwarf 3', path: 'dwarf3.png', race: 'dwarf' },
    { name: 'Dwarf 4', path: 'dwarf4.png', race: 'dwarf' },
    { name: 'Dwarf 5', path: 'dwarf5.png', race: 'dwarf' },
    { name: 'Dwarf 6', path: 'dwarf6.png', race: 'dwarf' },
    { name: 'Dwarf 7', path: 'dwarf7.png', race: 'dwarf' },
    { name: 'Dwarf 8', path: 'dwarf8.png', race: 'dwarf' },
    { name: 'Dwarf 9', path: 'dwarf9.png', race: 'dwarf' },
    { name: 'Dwarf 10', path: 'dwarf10.png', race: 'dwarf' },
    { name: 'Dwarf 11', path: 'dwarf11.png', race: 'dwarf' },
  ],
  elf: [
    { name: 'Elf 1', path: 'elf1.png', race: 'elf' },
    { name: 'Elf 2', path: 'elf2.png', race: 'elf' },
  ],
  human: [
    { name: 'Human 1', path: 'human1.png', race: 'human' },
    { name: 'Human 2', path: 'human2.png', race: 'human' },
  ],
}