Feature: Technical test

    Scenario: Login to app
        Given User on login page
        When user enter email
        And enter password
        And click Masuk
        Then User logged in into the app