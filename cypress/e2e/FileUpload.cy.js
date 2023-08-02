describe('File Uploads',()=>{
    it('Single File Upload',()=>{
        cy.visit('http://the-internet.herokuapp.com/upload');
        // cy.get('#file-upload').attachFile('NewBitmapimage.jpeg');
        // cy.contains('Upload').click();
    })
    // it.only('Rename before upload ',()=>{
    //     cy.visit('http://the-internet.herokuapp.com/upload');
        // cy.get('#file-upload').attachFile({filePath:'NewBitmapimage.jpeg',fileName:'renamedImage.jpeg'});
        // cy.contains('Upload').click();
    // })
})