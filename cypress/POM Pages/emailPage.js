class emailPage{
    composeBtn(){
        return cy.xpath("//a[.='Compose']");
    }
}
export default emailPage;