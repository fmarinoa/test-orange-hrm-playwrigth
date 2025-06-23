Feature: Login Functionality

  Scenario: Successful Login
    Given I navigate to the login page
    When I enter valid credentials
    Then I should be redirected to the dashboard

  Scenario: Unsuccessful Login
    Given I navigate to the login page
    When I enter invalid credentials
    Then I should see an error message
    Then The error message should be "Invalid credentials"
