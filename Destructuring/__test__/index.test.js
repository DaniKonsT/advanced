const { getSpecialAttacks } = require('../src/index');  // путь к функции

describe('getSpecialAttacks', () => {
  it('should return an array of attacks with correct fields', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...'
        }
      ]
    };
    
    const result = getSpecialAttacks(character);
    
    expect(result).toEqual([
      {
        id: 8,
        name: 'Двойной выстрел',
        description: 'Двойной выстрел наносит двойной урон',
        icon: 'http://...'
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        description: 'Описание недоступно',
        icon: 'http://...'
      }
    ]);
  });

  it('should return default description if description is missing', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 10,
          name: 'Огненная стрела',
          icon: 'http://...'
        }
      ]
    };
    
    const result = getSpecialAttacks(character);
    
    expect(result[0].description).toBe('Описание недоступно');
  });

  it('should return the correct description when present', () => {
    const character = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 3,
      attack: 40,
      defence: 10,
      special: [
        {
          id: 11,
          name: 'Ледяной шип',
          icon: 'http://...',
          description: 'Наносит урон и замораживает противника'
        }
      ]
    };
    
    const result = getSpecialAttacks(character);
    
    expect(result[0].description).toBe('Наносит урон и замораживает противника');
  });
});
