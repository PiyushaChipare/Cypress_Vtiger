class homePage{

    searchEdt(){
        return cy.get('#twotabsearchtextbox');
    }
    searchBtn(){
        return cy.get('#nav-search-submit-button');
    }
    

}

export default homePage;