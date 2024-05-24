export interface HitomezashiParameters {
  size: {
    width: number;
    height: number;
  };

  offset: {
    row: number[];
    column: number[];
  };

  style: {
    padding: number;
    thickness: number;
    palette: string[];
  };
}
