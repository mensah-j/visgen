export class Transform {
  public origin = {
    x: 0,
    y: 0
  };

  public scale = {
    x: 1,
    y: 1
  };

  public rotation = 0;

  public constructor(transform: Partial<Transform> = {}) {
    Object.assign(this, transform);
  }

  get apply() {
    const { origin, scale, rotation } = this;

    const cos = Math.cos(rotation);
    const sin = Math.sin(rotation);

    return (x: number, y: number) => {
      const u = origin.x + x * scale.x;
      const v = origin.y + y * scale.y;

      return [cos * u - sin * v, sin * u + cos * v] as [number, number];
    };
  }
}
