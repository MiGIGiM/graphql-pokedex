
function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${  hex}` : hex;
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${  componentToHex(r)  }${componentToHex(g)  }${componentToHex(b)}`;
}

export function colorNameToHex(colorName: string) {
  const canvas = document.createElement('canvas');

  canvas.width = 1;
  canvas.height = 1;

  const context = canvas.getContext('2d');

  if (!context) return '#000000';

  context.fillStyle = colorName;
  context.fillRect(0, 0, 1, 1);

  const { data } = context.getImageData(0, 0, 1, 1);
  const hex = rgbToHex(data[0], data[1], data[2]);
  return hex;
}

export const getPokemonTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "normal":
      return "#A8A878";
    case "fire":
      return "#F08030";
    case "water":
      return "#6890F0";
    case "electric":
      return "#F8D030";
    case "grass":
      return "#78C850";
    case "ice":
      return "#98D8D8";
    case "fighting":
      return "#C03028";
    case "poison":
      return "#A040A0";
    case "ground":
      return "#E0C068";
    case "flying":
      return "#A890F0";
    case "psychic":
      return "#F85888";
    case "bug":
      return "#A8B820";
    case "rock":
      return "#B8A038";
    case "ghost":
      return "#705898";
    case "dragon":
      return "#7038F8";
    case "dark":
      return "#705848";
    case "steel":
      return "#B8B8D0";
    case "fairy":
      return "#EE99AC";
    default:
      return "#000000";
  }
}
