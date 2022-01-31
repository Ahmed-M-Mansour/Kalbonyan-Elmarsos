const team = ['Mansouur', 'Ahmed', 'Amr', 'Omar', 'Nada']
const teamLess4 = () => `Team size: ${team.length}`
const teamFull = () => `Too many member on your team`
const checkTeam = team.length <= 4 ? teamLess4() : teamFull()

console.log(checkTeam)


const myAge = 20
const showPage = () => {
    return 'Showing the page'
}
const showErrorPage = () => {
    return 'Showing the error page'
}
const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Andrew', 'Ben', 'Mike']
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Too many people on your team')
