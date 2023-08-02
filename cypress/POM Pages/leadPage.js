class leadPage{
    createLeadLnk(){
        return cy.get('[alt="Create Lead..."]');
    }
    firstNameLnk(firstName){
        return cy.get(`//a[.='${firstName}']`);
    }
}
export default leadPage;