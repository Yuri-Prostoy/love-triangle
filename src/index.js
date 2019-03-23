/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let trg = [...preferences],
    triangleCount = 0;

  if (trg.length >= 3) {
    for (let i = 0; i < trg.length; i++) {
      if (trg[i] !== "X") {
        if ((trg[trg[trg[i] - 1] - 1] === i + 1) & (trg[i] !== i + 1)) {
          triangleCount++;
          trg[i] = trg[trg[i] - 1] = trg[trg[trg[i] - 1] - 1] = "X";
        }
      }
    }
  }
  return triangleCount;

};
