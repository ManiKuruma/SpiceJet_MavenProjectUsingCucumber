$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Book_Flights.feature");
formatter.feature({
  "line": 1,
  "name": "Booking flights",
  "description": "",
  "id": "booking-flights",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Booking oneway trip flight",
  "description": "",
  "id": "booking-flights;booking-oneway-trip-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_001"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on flights booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user selects trip type as oneway \"\u003ctrip type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "selects departure city \"\u003cdeparture city\u003e\", arrival city \"\u003carrival city\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "selects depart month\"\u003cdepart month\u003e\",depart date\"\u003cdepart date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects passengers count of adult \"\u003cadult\u003e\",child \"\u003cchild\u003e\",infant \"\u003cinfant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "selects currency type \"\u003ccurrency type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on search button and search result is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "booking-flights;booking-oneway-trip-flight;",
  "rows": [
    {
      "cells": [
        "trip type",
        "",
        "departure city",
        "",
        "arrival city",
        "",
        "depart month",
        "",
        "depart date",
        "",
        "adult",
        "",
        "child",
        "",
        "infant",
        "",
        "currency type"
      ],
      "line": 12,
      "id": "booking-flights;booking-oneway-trip-flight;;1"
    },
    {
      "cells": [
        "oneway",
        "",
        "AMD",
        "",
        "BKK",
        "",
        "June 2020",
        "",
        "17",
        "",
        "4",
        "",
        "2",
        "",
        "1",
        "",
        "AED"
      ],
      "line": 13,
      "id": "booking-flights;booking-oneway-trip-flight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5606599900,
  "status": "passed"
});
formatter.before({
  "duration": 7352885500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Booking oneway trip flight",
  "description": "",
  "id": "booking-flights;booking-oneway-trip-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@tc_001"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on flights booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user selects trip type as oneway \"oneway\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "selects departure city \"AMD\", arrival city \"BKK\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "selects depart month\"June 2020\",depart date\"17\"",
  "matchedColumns": [
    6,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "selects passengers count of adult \"4\",child \"2\",infant \"1\"",
  "matchedColumns": [
    10,
    12,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "selects currency type \"AED\"",
  "matchedColumns": [
    16
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user clicks on search button and search result is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlights_stepdef.user_is_on_flights_booking_page()"
});
formatter.result({
  "duration": 150925699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oneway",
      "offset": 34
    }
  ],
  "location": "BookFlights_stepdef.user_selects_trip_type_as_oneway(String)"
});
formatter.result({
  "duration": 372239001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AMD",
      "offset": 24
    },
    {
      "val": "BKK",
      "offset": 44
    }
  ],
  "location": "BookFlights_stepdef.selects_departure_city_arrival_city(String,String)"
});
formatter.result({
  "duration": 6589141700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June 2020",
      "offset": 21
    },
    {
      "val": "17",
      "offset": 44
    }
  ],
  "location": "BookFlights_stepdef.selects_depart_month_depart_date(String,String)"
});
formatter.result({
  "duration": 739196399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 35
    },
    {
      "val": "2",
      "offset": 45
    },
    {
      "val": "1",
      "offset": 56
    }
  ],
  "location": "BookFlights_stepdef.selects_passengers_count_of_adult_child_infant(String,String,String)"
});
formatter.result({
  "duration": 1684998901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AED",
      "offset": 23
    }
  ],
  "location": "BookFlights_stepdef.selects_currency_type(String)"
});
formatter.result({
  "duration": 402780700,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_search_button_and_search_result_is_displayed()"
});
formatter.result({
  "duration": 13601083000,
  "status": "passed"
});
formatter.after({
  "duration": 6218980400,
  "status": "passed"
});
formatter.before({
  "duration": 4486956701,
  "status": "passed"
});
formatter.before({
  "duration": 5599122699,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Deals on Flights",
  "description": "",
  "id": "booking-flights;deals-on-flights",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@tc_002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user clicks on Deals link and navigates to Deals page",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user clicks on Flights link",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "result page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlights_stepdef.user_is_on_homepage()"
});
formatter.result({
  "duration": 4353901,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_Deals_link_and_navigates_to_Deals_page()"
});
formatter.result({
  "duration": 1649657800,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_Flights_link()"
});
formatter.result({
  "duration": 2055508000,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.result_page_is_displayed()"
});
formatter.result({
  "duration": 3723529199,
  "status": "passed"
});
formatter.after({
  "duration": 5982007899,
  "status": "passed"
});
formatter.before({
  "duration": 4476420799,
  "status": "passed"
});
formatter.before({
  "duration": 6461818600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Deals on Boarding Pass",
  "description": "",
  "id": "booking-flights;deals-on-boarding-pass",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@tc_003"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user clicks on Deals link and navigates to the Deals page",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user clicks on Boarding Pass link",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "result page is displayed to the user",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlights_stepdef.user_is_on_the_homepage()"
});
formatter.result({
  "duration": 19294000,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_Deals_link_and_navigates_to_the_Deals_page()"
});
formatter.result({
  "duration": 2506399201,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_Boarding_Pass_link()"
});
formatter.result({
  "duration": 2066187700,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.result_page_is_displayed_to_the_user()"
});
formatter.result({
  "duration": 2459469700,
  "status": "passed"
});
formatter.after({
  "duration": 5909492900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Booking round trip flight",
  "description": "",
  "id": "booking-flights;booking-round-trip-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@tc_004"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user verifies that he/she is on flight booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user selects trip type as roundtrip \"\u003ctrip type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user selects departure city \"\u003cdeparture city\u003e\", arrival city \"\u003carrival city\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user selects depart month\"\u003cdepart month\u003e\",depart date\"\u003cdepart date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "selects return month\"\u003creturn month\u003e\",return date\"\u003creturn date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "selects passengers count such as adult \"\u003cadult\u003e\",child \"\u003cchild\u003e\",infant \"\u003cinfant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "selects type of currency \"\u003ccurrency type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on search button and search result gets displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "booking-flights;booking-round-trip-flight;",
  "rows": [
    {
      "cells": [
        "trip type",
        "",
        "departure city",
        "",
        "arrival city",
        "",
        "depart month",
        "",
        "depart date",
        "",
        "return month",
        "",
        "return date",
        "",
        "adult",
        "",
        "child",
        "",
        "infant",
        "",
        "currency type"
      ],
      "line": 40,
      "id": "booking-flights;booking-round-trip-flight;;1"
    },
    {
      "cells": [
        "roundtrip",
        "",
        "AMD",
        "",
        "BKK",
        "",
        "June 2020",
        "",
        "17",
        "",
        "July 2020",
        "",
        "23",
        "",
        "4",
        "",
        "2",
        "",
        "1",
        "",
        "AED"
      ],
      "line": 41,
      "id": "booking-flights;booking-round-trip-flight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4496786999,
  "status": "passed"
});
formatter.before({
  "duration": 7312112999,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Booking round trip flight",
  "description": "",
  "id": "booking-flights;booking-round-trip-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 29,
      "name": "@tc_004"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user verifies that he/she is on flight booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user selects trip type as roundtrip \"roundtrip\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "user selects departure city \"AMD\", arrival city \"BKK\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user selects depart month\"June 2020\",depart date\"17\"",
  "matchedColumns": [
    6,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "selects return month\"July 2020\",return date\"23\"",
  "matchedColumns": [
    10,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "selects passengers count such as adult \"4\",child \"2\",infant \"1\"",
  "matchedColumns": [
    16,
    18,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "selects type of currency \"AED\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user clicks on search button and search result gets displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlights_stepdef.user_verifies_that_he_she_is_on_flight_booking_page()"
});
formatter.result({
  "duration": 18377700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "roundtrip",
      "offset": 37
    }
  ],
  "location": "BookFlights_stepdef.user_selects_trip_type_as_roundtrip(String)"
});
formatter.result({
  "duration": 376117200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AMD",
      "offset": 29
    },
    {
      "val": "BKK",
      "offset": 49
    }
  ],
  "location": "BookFlights_stepdef.user_selects_departure_city_arrival_city(String,String)"
});
formatter.result({
  "duration": 6564194300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "June 2020",
      "offset": 26
    },
    {
      "val": "17",
      "offset": 49
    }
  ],
  "location": "BookFlights_stepdef.user_selects_depart_month_depart_date(String,String)"
});
formatter.result({
  "duration": 745824100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July 2020",
      "offset": 21
    },
    {
      "val": "23",
      "offset": 44
    }
  ],
  "location": "BookFlights_stepdef.selects_return_month_return_date(String,String)"
});
formatter.result({
  "duration": 1079054400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 40
    },
    {
      "val": "2",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 61
    }
  ],
  "location": "BookFlights_stepdef.selects_passengers_count_such_as_adult_child_infant(String,String,String)"
});
formatter.result({
  "duration": 1649407599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AED",
      "offset": 26
    }
  ],
  "location": "BookFlights_stepdef.selects_type_of_currency(String)"
});
formatter.result({
  "duration": 464514600,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_search_button_and_search_result_gets_displayed()"
});
formatter.result({
  "duration": 6603629700,
  "status": "passed"
});
formatter.after({
  "duration": 6251504800,
  "status": "passed"
});
});