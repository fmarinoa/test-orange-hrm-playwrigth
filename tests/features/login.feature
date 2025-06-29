Feature: Login Functionality

  Scenario: Successful Login
    Given I navigate to the login page
    When I enter credentials
      | Admin | admin123 |
    Then I should be redirected to the dashboard

  Scenario Outline: Unsuccessful Login
    Given I navigate to the login page
    When I enter credentials
      | <username> | <password> |
    Then I should see an error message
    Then The error message should be "Invalid credentials"

    Examples:
      | username          | password    |
      | InvalidUser       | InvalidPass |
      | !!$$!$"!$"%&//&&) | =/)&/(&$#"" |
