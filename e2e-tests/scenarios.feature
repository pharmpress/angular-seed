Feature: Example feature
  As a user I want to navigate in all views

  Scenario: Index page
    Given I am on the "index.html" page
    Then I should be redirected to "view1"
    When I click on "view2"
    Then I should see "partial for view 2"
    When I click on "view1"
    Then I should see "partial for view 1"

  Scenario: Index page without mock
    Given I am on the "index.html#!/view3" page
    Then I should see name "No connection"

  Scenario: Index page with mock
    Given I am on the "index.html#!/view3?apimock=true" page
    Then I should see name "Jhon"
