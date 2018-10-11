function ourNuN(n) {
  if (typeof n == "number" && n != n) {
    return true;
  } else {
    return false;
  }
}
console.log(ourNuN(5 * "s"));
