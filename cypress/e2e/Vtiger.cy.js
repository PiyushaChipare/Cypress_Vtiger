import createLeadPage from "../POM Pages/createLeadePage";
import emailPage from "../POM Pages/emailPage";
import homePage from "../POM Pages/homePage";
import leadCreatedPage from "../POM Pages/leadCreatedPage";
import leadPage from "../POM Pages/leadPage";

describe('Vtiger',()=>{
    it('Login',()=>{
        cy.log('First Test');
        // cy.visit('http://localhost:8888');
        // cy.login('admin','password');
        // cy.get('[name="user_name"]').type('admin');
        // cy.get('[name="user_password"]').type('password');
        // cy.get('[id="submitButton"]').click();
    })
    it('CreateLead',()=>{
        cy.log('Second Test');
        const HomePage=new homePage();
        HomePage.leadsLnk().click();
        const LeadPage=new leadPage();
        LeadPage.createLeadLnk().click();
        const CreateLeadPage=new createLeadPage();cy.fixture('LeadData').then((data1)=>{
            CreateLeadPage.firstNameEdt().type(`${data1.firstName}`);
            CreateLeadPage.lastNameEdt().type(`${data1.lastName}`);
            CreateLeadPage.companyEdt().type(`${data1.company}`);
        });
        CreateLeadPage.groupRadioBtn().check();
        CreateLeadPage.groupDropdown().select('Support Group');
        CreateLeadPage.saveBtn().click();
        const LeadCreatedPage=new leadCreatedPage();
        LeadCreatedPage.leadTitle().should('contain.text','Pratiksha');
        // cy.xpath("//td[@class='tabUnSelected']/a[text()='Leads']").should('have.text','Leads');
        // // cy.xpath("//td[@class='tabUnSelected']/a[text()='Leads']").invoke('text').then((text)=>{cy.log(text);})
        // // cy.xpath("//td[@class='tabUnSelected']/a[text()='Leads']").trigger('')
        // cy.xpath("//td[@class='tabUnSelected']/a[text()='Leads']").click(); 
    })
    it.only('Send Email',()=>{
        const HomePage=new homePage();
        HomePage.emailLnk().click();
        const EmailPage=new emailPage();
        EmailPage.composeBtn().click();
        cy.visit('http://localhost:8888/index.php?module=Emails&action=EmailsAjax&file=EditView');
        cy.get('#parent_name').type('Mary Smith<mary_smith@company.com>');
        cy.get('#subject').type('OK');
        cy.get('[title="Save [Alt+S]"]').first().click();
        cy.visit('http://localhost:8888/index.php?module=Emails&action=index');
        cy.get("//b[contains(text(),'OK')]").should('exist');

        //
    })
})