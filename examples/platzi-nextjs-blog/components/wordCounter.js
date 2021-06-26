export default function wordCounter(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  // Divide the total number of words by 160 (average reading speed) to estimate the reading time in minutes
  return Math.ceil(str.split(" ").length/160);
}