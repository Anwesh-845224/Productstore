@Product_Store
Feature: Product_Store Website

@TC_01_Login
Scenario Outline: Login into Product_Store Website
Given The user launch the Chrome application
When Clicking on login to navigate Login Page
Then The user login using "<username>" and "<password>" with valid and invalid details
Then Clicking on login button

Examples: 

|username	|password|
|anwesh	    |anwi@12 |
|anweshd	|anwi@123|
|danwesh	|anwi@1234|

@TC_02_contact
Scenario: Fill contact in Product_Store
Given User launch the Chrome application
When Clicking on contact to navigate contact Page
Then The user filling contactdetails using email as "anwesh@gmail.com" and name as "anwesh1" and message as "hello" details
Then Clicking on close button
@TC_03_add
Scenario: Add to cart in Product_Store
Given Launch the Chrome application
When Clicking on product to navigate product Page
Then The user clicks add to cart
Then Clicking on close browser button
@TC_04_next
Scenario: Navigate in Product_Store
Given To launch the Chrome application
When Clicking on next to navigate next Page
Then Clicking on browser button
@TC_05_category
Scenario: Selecting category
Given For launching the Chrome application
When Clicking on category to navigate phone Page
Then The user clicking on category
Then Click on close button

