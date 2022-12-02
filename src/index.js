module.exports = function reverse(n) {
    let rev;
    rev = n.toString().split("").reverse();
    const newArray = rev.filter((element) => element !== "-");
    return newArray.join("");
};
