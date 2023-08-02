class loginPage{
    usernameEdt(){
        return cy.get('[name="user_name"]');
    }

    passwordEdt(){
        return cy.get('[name="user_password"]');
    }
    loginBtn(){
        return cy.get('[id="submitButton"]')
    }
}
export default loginPage;