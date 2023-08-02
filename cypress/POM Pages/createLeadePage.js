class createLeadPage{
    firstNameEdt(){
        return cy.get('[name="firstname"]');
    }

    lastNameEdt(){
        return cy.get('[name="lastname"]');
    }

    companyEdt(){
        return cy.get('[name="company"]');
    }
    groupRadioBtn(){
        return cy.get('[value="T"]');
    }
    groupDropdown(){
        return cy.get('[name="assigned_group_id"]');
    }
    saveBtn(){
        return cy.get('[title="Save [Alt+S]"]').first();
    }
}
export default createLeadPage;