Feature: Validate the functionality of healthissues through Healthline
Background: 
Given User should launch the browser and load the url
@smoke
Scenario: To get solution for healthproblems
When User should click the Health problems topics
And User should give nutritarian diet 
Then User should navigate to the given healthissues

@Sanity
Scenario: To check product reviews
When User should click product reviews
And User should click WomensHealth
And User should click AcneTreatement 
And User give a page title
Then User should navigate the credential page