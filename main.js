function sumNoms(noms) {
  return noms.reduce(function (acc, current) {
    return (res = acc + current);
  });
}
console.log(sumNoms([1, 2, 3]));
///////////
function maxNom(noms) {
  return Math.max(...noms);
}
console.log(maxNom([1, 2, 3]));
////////

function unique(noms) {
  return [...new Set(noms)];
}
console.log(unique([1, 2, 3, 4, 4, 5, 3]));
/////
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("nabil"));
