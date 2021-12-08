generateHTML = (theTeam) => {
    let cards = [];

    for (var i =0; i<theTeam.length; i++){
        if (theTeam[i].type === 'Manager') {
            let managerCard = generateManagerCard(theTeam[i]);
            cards.push(managerCard);
        } else if (theTeam[i].type === 'Engineer') {
            let engineerCard = generateEngineerCard(theTeam[i]);
            cards.push(engineerCard);
        } else if (theTeam[i].type === 'Intern') {
            let internCard = generateInternCard(theTeam[i]);
            cards.push(internCard);
        }
    };
    const theTeamCards = teamCards.join('');

    const indexHTML = generateCompleteHTML(theTeamCards);
    return indexHTML;
};


const generateCompleteHTML = (theTeamCards) => {
    return
    
 
 };  


module.exports = generateHTML;



