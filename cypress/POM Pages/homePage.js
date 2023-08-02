class homePage{
    leadsLnk(){
        return cy.xpath("//td[@class='tabUnSelected']/a[text()='Leads']");
    }

    emailLnk(){
        return cy.xpath("//a[.='Email']");
    }
}
export default homePage;