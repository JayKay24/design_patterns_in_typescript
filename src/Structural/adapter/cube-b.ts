type NumberTripleArr = [number, number, number];

// A hypothetical Cube tool from company B
export interface ICubeB {
  create(
    top_left_front: NumberTripleArr,
    bottom_right_back: NumberTripleArr
  ): boolean;
}

export default class CubeB implements ICubeB {
  static last_time = Date.now();

  create(
    top_left_front: NumberTripleArr,
    bottom_right_back: NumberTripleArr
  ): boolean {
    // if not busy, then manufacture a cube with coords
    const now = Date.now();

    if (now > CubeB.last_time + 3000) {
      console.log(
        `Company B built Cube with coords [${top_left_front[0]}, ${top_left_front[1]}, ${top_left_front[2]}], 
				[${bottom_right_back[0]}, ${bottom_right_back[1]}, ${bottom_right_back[2]}]`
      );

      CubeB.last_time = now;

      return true;
    }

    return false; // busy
  }
}
