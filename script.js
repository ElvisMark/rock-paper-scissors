function getComputerChoice () {
    const choice = ['rock','paper','scissors'];
    const atRandom = Math.floor(Math.random * choice.length)
    return choice [atRandom]
}
console.log(getComputerChoice())