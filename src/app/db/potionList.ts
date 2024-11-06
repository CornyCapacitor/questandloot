import { Attributes } from "../types"

type Item = {
  name: string,
  description: string,
  image: string,
}

export const potionList: { [key in keyof Attributes]: Item[] } = {
  'strength': [
    {
      name: 'Lesser Strength Potion',
      description: 'A potion that grants a small boost to strength.',
      image: 'lesser_strength_potion.png',
    },
    {
      name: 'Strength Potion',
      description: 'A potion that grants a moderate boost to strength.',
      image: 'strength_potion.png',
    },
    {
      name: 'Strong Strength Potion',
      description: 'A potion that grants a powerful boost to strength.',
      image: 'strong_strength_potion.png',
    }
  ],

  'agility': [
    {
      name: 'Lesser Agility Potion',
      description: 'A potion that grants a small boost to agility.',
      image: 'lesser_agility_potion.png',
    },
    {
      name: 'Agility Potion',
      description: 'A potion that grants a moderate boost to agility.',
      image: 'agility_potion.png',
    },
    {
      name: 'Strong Agility Potion',
      description: 'A potion that grants a powerful boost to agility.',
      image: 'strong_agility_potion.png',
    }
  ],

  'intellect': [
    {
      name: 'Lesser Intellect Potion',
      description: 'A potion that grants a small boost to intellect.',
      image: 'lesser_intellect_potion.png',
    },
    {
      name: 'Intellect Potion',
      description: 'A potion that grants a moderate boost to intellect.',
      image: 'intellect_potion.png',
    },
    {
      name: 'Strong Intellect Potion',
      description: 'A potion that grants a powerful boost to intellect.',
      image: 'strong_intellect_potion.png',
    }
  ],

  'stamina': [
    {
      name: 'Lesser Stamina Potion',
      description: 'A potion that grants a small boost to stamina.',
      image: 'lesser_stamina_potion.png',
    },
    {
      name: 'Stamina Potion',
      description: 'A potion that grants a moderate boost to stamina.',
      image: 'stamina_potion.png',
    },
    {
      name: 'Strong Stamina Potion',
      description: 'A potion that grants a powerful boost to stamina.',
      image: 'strong_stamina_potion.png',
    }
  ],

  'luck': [
    {
      name: 'Lesser Luck Potion',
      description: 'A potion that grants a small boost to luck.',
      image: 'lesser_luck_potion.png',
    },
    {
      name: 'Luck Potion',
      description: 'A potion that grants a moderate boost to luck.',
      image: 'luck_potion.png',
    },
    {
      name: 'Strong Luck Potion',
      description: 'A potion that grants a powerful boost to luck.',
      image: 'strong_luck_potion.png',
    }
  ]
}
