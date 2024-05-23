type bit = 0 | 1;

export interface HitomezashiConfig {
  image: {
    width: number;
    height: number;
    context: 'svg' | 'canvas' | 'webgl';
  };

  parameters: {
    rows: {
      parity: bit;
    }[];

    columns: {
      parity: bit;
    }[];

    thickness: number;
  };
}
