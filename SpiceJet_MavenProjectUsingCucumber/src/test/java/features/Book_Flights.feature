Feature: Booking flights
@tc_001
Scenario Outline: Booking oneway trip flight
Given user is on flights booking page
When user selects trip type as oneway "<trip type>"
And selects departure city "<departure city>", arrival city "<arrival city>"
And selects depart month"<depart month>",depart date"<depart date>"
And selects passengers count of adult "<adult>",child "<child>",infant "<infant>"
And selects currency type "<currency type>"
Then user clicks on search button and search result is displayed
Examples:
|trip type||departure city||arrival city||depart month||depart date||adult||child||infant||currency type|
|oneway||AMD||BKK||June 2020||17||4||2||1||AED|

@tc_002
Scenario: Deals on Flights
Given user is on homepage
When user clicks on Deals link and navigates to Deals page
And user clicks on Flights link
Then result page is displayed  

@tc_003
Scenario: Deals on Boarding Pass
Given user is on the homepage
When user clicks on Deals link and navigates to the Deals page
And user clicks on Boarding Pass link
Then result page is displayed to the user 

@tc_004
Scenario Outline: Booking round trip flight
Given user verifies that he/she is on flight booking page 
When user selects trip type as roundtrip "<trip type>"
And user selects departure city "<departure city>", arrival city "<arrival city>"
And user selects depart month"<depart month>",depart date"<depart date>"
And selects return month"<return month>",return date"<return date>"
And selects passengers count such as adult "<adult>",child "<child>",infant "<infant>"
And selects type of currency "<currency type>"
Then user clicks on search button and search result gets displayed
Examples:
|trip type||departure city||arrival city||depart month||depart date||return month||return date||adult||child||infant||currency type|
|roundtrip||AMD||BKK||June 2020||17||July 2020||23||4||2||1||AED|