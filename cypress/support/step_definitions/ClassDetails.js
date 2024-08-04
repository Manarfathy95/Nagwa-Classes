import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"; 



When(/^Navigate to nagwa website$/, () => {
    cy.visit('https://www.nagwa.com/en/eg/')
})



When(/^Click on a stage$/, () => {
cy.xpath('//h5[contains(text(),"First Year of Primary School")]').click()

})

When("I wait for seconds", () => {

    
    cy.wait(10000)
})


When(/^Click on a subject$/, () => {



    cy.get('[href="/en/eg/primary/1/english-en"]').click()

})


When(/^Click on the details button$/, () => {
    cy.get(':nth-child(1) > .classes-list > :nth-child(1) > .class-card__cta > .btn-black')

})