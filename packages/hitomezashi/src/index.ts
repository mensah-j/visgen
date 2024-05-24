import Two from 'two.js';
import { Transform } from './transform';
import { HitomezashiParameters } from './parameters';

export class Hitomezashi {
  private renderer: Two;

  public constructor(private parameters: HitomezashiParameters) {
    this.renderer = new Two({ ...parameters.size });
  }

  public render({
    context,
    element
  }: {
    context: 'svg' | 'canvas' | 'webgl';
    element: HTMLElement;
  }) {
    this.renderer.appendTo(element);
    this.renderer.type = Two.Types[context];

    this.generate();
    this.renderer.update();
  }

  private generate() {
    const { size, offset, style } = this.parameters;

    const t = new Transform({
      origin: {
        x: style.padding,
        y: style.padding
      },

      scale: {
        x: (size.width - 2 * style.padding) / offset.column.length,
        y: (size.height - 2 * style.padding) / offset.row.length
      }
    }).apply;

    const color = (n: number, m: number) =>
      style.palette[(19 * n * n + 31 * m * m) % style.palette.length];

    for (let i = 0; i < offset.column.length; i++) {
      for (let j = 0; j < offset.row.length; j++) {
        if (i % 2 === offset.column[j]) {
          const [p, q] = [t(i, j), t(i + 1, j)];
          const line = this.renderer.makeLine(...p, ...q);
          const gradient = this.renderer.makeLinearGradient(
            ...p,
            ...q,
            new Two.Stop(0, color(i, j)),
            new Two.Stop(1, color(i + 1, j))
          );
          gradient.units = 'userSpaceOnUse';

          line.stroke = gradient;
          line.linewidth = style.thickness;
          line.cap = 'square';
        }

        if (j % 2 === offset.column[i]) {
          const [p, q] = [t(i, j), t(i, j + 1)];
          const line = this.renderer.makeLine(...p, ...q);
          const gradient = this.renderer.makeLinearGradient(
            ...p,
            ...q,
            new Two.Stop(0, color(i, j)),
            new Two.Stop(1, color(i, j + 1))
          );
          gradient.units = 'userSpaceOnUse';

          line.stroke = gradient;
          line.linewidth = style.thickness;
          line.cap = 'square';
        }
      }
    }
  }
}

/*export default function hitomezashi(parent: HTMLElement, { image, parameters }: HitomezashiConfig) {
  const two = new Two({
    width: image.width,
    height: image.height,
    type: Two.Types[image.context]
  });

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

  two.appendTo(parent);
  two.update();
}*/
