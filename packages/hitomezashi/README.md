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

```yaml
size: {
  width: number;
  height: number;
}
```

### `rows`

The aligments of each horizontal stitch. Rows `i` and `j` share the same alignment if and only if `rows[i]` and `rows[j]` are equivalent modulo 2.

```yaml
rows: number[]
```

### `columns`

The aligments of each vertical stitch. Columns $i$ and $j$ share the same alignment if and only if `columns[i]` and `columns[j]` are equivalent modulo 2.

```yaml
columns: number[]
```

### `style`

```yaml
style: HitomezashiStyle
```

The visual style of the stitch pattern.

- #### `thickness`

  The thickness of tne stitch lines, in pixels.

  ```yaml
  thickness: number
  ```

- #### `roundness`

  The degree to which the outlines formed by the stitch pattern curve.

  ```yaml
  roundness: number
  ```

- #### `palette`
  The color palette used to draw the pattern. Each string in the array must be a valid CSS color.
  ```yaml
  palette: string[]
  ```
- #### `coloring`

  ```yaml
  coloring: HitomezashiVertexColoring | HitomezashiEdgeColoring | HitomezashiFaceColoring
  ```

  ### Vertex Coloring Parameters

  - #### `kind`

    The coloring algorithm used. Must be set to `vertex`.

    ```yaml
    kind: 'vertex'
    ```

  - #### `at`
    The color map. The color at vertex `(i,j)` is assigned to `palette[at(i, j)]`.
    ```ruby
    at: (i: number, j: number) => number
    ```

  ### Edge Coloring Parameters

  - #### `kind`

    The coloring algorithm used. Must be set to `edge`.

    ```yaml
    kind: 'edge'
    ```

  - #### `method`
    The method used to color the curves formed by the stitching pattern. The `elevation` method treats the curves as the contours of a function on the plane, and assigns colors based on the value of the function at each point. The `length` method assigns colors based on the length of each contour. The `random` method assigns colors randomly, without repeating identical colors for neighboring contours.
    ```yaml
    method: 'elevation' | 'length' | 'random'
    ```

  ### Face Coloring Parameters

  - #### `kind`

    The coloring algorithm used. Must be set to `face`.

    ```yaml
    kind: 'face'
    ```

  - #### `method`
    The method used to color the regions formed by the stitching pattern. The `elevation` method treats the boundary of each region as a contour of some function on the plane, and assigns colors based on the value of the function on each region. The `area` method assigns colors based on the area of each region. The `random` method assigns colors randomly, without repeating identical colors for neighboring region.
    ```yaml
    method: 'elevation' | 'area' | 'random'
    ```
