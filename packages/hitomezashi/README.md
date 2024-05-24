<div align="center">

# Hitomezashi

</div>

**Hitomezashi (一目刺し)** is a style of Japanese stitching in which groups of horizontal and vertical stitches are aligned to form an emergent pattern.
This package provides tools to generate these stitching patterns.

### Install

```sh
$ npm install @visgen/hitomezashi
```

### Usage

```ts
import { Hitomezashi } from '@visgen/hitomezashi';

const hitomezashi = new Hitomezashi({
  /* parameters */
});

hitomezashi.render({ element, context: 'svg' });
```

## Parameters

### `size`

The size of the rendering context, in pixels.

```ts
size: {
  width: number;
  height: number;
}
```

### `rows`

The aligments of each horizontal stitch. Rows $i$ and $j$ share the same alignment if and only if `rows[i]` and `rows[j]` are equivalent $\bmod \,2$.

```ts
rows: number[]
```

### `columns`

The aligments of each vertical stitch. Columns $i$ and $j$ share the same alignment if and only if `columns[i]` and `columns[j]` are equivalent $\bmod \,2$.

```ts
columns: number[]
```

### `style`

The visual style of the stitch pattern.

```ts
style: HitomezashiOutline | HitomezashiSolid;
```
