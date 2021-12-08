generateHTML = (theTeam) => {
    let Cards = [];

    for (var i =0; i<theTeam.length; i++){
        if (theTeam[i].type === 'Manager') {
            let managerCard = generateManagerCard(theTeam[i]);
            teamCards.push(managerCard);
        } else if (theTeam[i].type === 'Engineer') {
            let engineerCard = generateEngineerCard(theTeam[i]);
            teamCards.push(engineerCard);
        } else if (theTeam[i].type === 'Intern') {
            let internCard = generateInternCard(theTeam[i]);
            teamCards.push(internCard);
        }
    };
    const theTeamCards = teamCards.join('');

    const indexHTML = generateCompleteHTML(theTeamCards);
    return indexHTML;
};

const generateCompleteHTML = (allTeamCards) => {
    return
};  

module.exports = generateHTML;



