function orderByProps(obj, order) {
    const ordered = [];
    for (const key of order) {
      if (key in obj) {
        ordered.push({ key, value: obj[key] });
      }
    }
  
    const remaining = Object.keys(obj)
      .filter((key) => !order.includes(key))
      .sort()
      .map((key) => ({ key, value: obj[key] }));
  
    return [...ordered, ...remaining];
  }

function getSpecialAttacks({ special }) {
  return special.map(({ id, name, icon, description = 'Описание недоступно' }) => ({
      id,
      name,
      icon,
      description,
    }));
  }

  module.exports = { orderByProps, getSpecialAttacks };
  