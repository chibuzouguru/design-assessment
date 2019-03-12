// export the array of color objects


// create the array of color objects. Will each have a color value and an id
// export const colorArray = [];

// create 120 colors and add them to the array
export default function getData() {
  let colorArray = [];

  for(let i = 0; i < 120; i++) {
    let color = `#${(Math.random().toString(16) + "000000").slice(2, 8).toUpperCase().slice(-6)}`
    let colorObject = {color: color, id: i, showing: false}
    colorArray.push(colorObject);
  }

  return colorArray;
}