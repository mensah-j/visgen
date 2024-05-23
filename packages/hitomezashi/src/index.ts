import Two from 'two.js';
import { HitomezashiConfig } from './config';

export default function hitomezashi(parent: HTMLElement, { image, parameters }: HitomezashiConfig) {
  const two = new Two({
    width: image.width,
    height: image.height,
    type: Two.Types[image.context]
  }).appendTo(parent);

  const { rows, columns } = parameters;

  const deltaX = image.width / columns.length;
  const deltaY = image.height / rows.length;

  for (let i = 0; i < columns.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (i % 2 === rows[j].parity) {
        const line = two.makeLine(i * deltaX, j * deltaY, (i + 1) * deltaX, j * deltaY);
        line.linewidth = parameters.thickness;
      }
      if (j % 2 === columns[i].parity) {
        const line = two.makeLine(i * deltaX, j * deltaY, i * deltaX, (j + 1) * deltaY);
        line.linewidth = parameters.thickness;
      }
    }
  }

  two.update();
}
