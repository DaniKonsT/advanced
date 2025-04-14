const getSpecialAttacks = (character) => {
    return character.special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
      id,
      name,
      description,
      icon
    }));
  };
  
  module.exports = { getSpecialAttacks };
  