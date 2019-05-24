module.exports = function main(number) {
  let result = "";
  let line1 = "._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.".split(
      "   "
    ),
    line2 = "|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|".split(
      "   "
    ),
    line3 = "|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|".split(
      "   "
    );
  let arr = [];
  arr.push(line1);
  arr.push(line2);
  arr.push(line3);

  for (let i = 0; i < 3; i++) {
    number.split("").forEach(element => {
      result += `${arr[i][element]} `;
    });
    result = result.slice(0, result.length - 1) + "\n";
  }
  return result;
};
