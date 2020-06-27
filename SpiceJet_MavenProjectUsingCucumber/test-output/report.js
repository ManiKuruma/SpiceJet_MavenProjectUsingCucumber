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
  "duration": 15868368700,
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
  "duration": 94952500,
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
  "duration": 303531700,
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
  "duration": 3671279100,
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
  "duration": 728905900,
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
  "duration": 1207285700,
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
  "duration": 305988100,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_search_button_and_search_result_is_displayed()"
});
formatter.result({
  "duration": 11003198000,
  "status": "passed"
});
formatter.after({
  "duration": 5952258600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Booking round trip flight",
  "description": "",
  "id": "booking-flights;booking-round-trip-flight",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tc_002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user verifies that he/she is on flight booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user selects trip type as roundtrip \"\u003ctrip type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user selects departure city \"\u003cdeparture city\u003e\", arrival city \"\u003carrival city\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects depart month\"\u003cdepart month\u003e\",depart date\"\u003cdepart date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "selects return month\"\u003creturn month\u003e\",return date\"\u003creturn date\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "selects passengers count such as adult \"\u003cadult\u003e\",child \"\u003cchild\u003e\",infant \"\u003cinfant\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "selects type of currency \"\u003ccurrency type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on search button and search result gets displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
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
      "line": 26,
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
      "line": 27,
      "id": "booking-flights;booking-round-trip-flight;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10150223700,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Booking round trip flight",
  "description": "",
  "id": "booking-flights;booking-round-trip-flight;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@tc_002"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user verifies that he/she is on flight booking page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "user selects trip type as roundtrip \"roundtrip\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user selects departure city \"AMD\", arrival city \"BKK\"",
  "matchedColumns": [
    2,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user selects depart month\"June 2020\",depart date\"17\"",
  "matchedColumns": [
    6,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "selects return month\"July 2020\",return date\"23\"",
  "matchedColumns": [
    10,
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "selects passengers count such as adult \"4\",child \"2\",infant \"1\"",
  "matchedColumns": [
    16,
    18,
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "selects type of currency \"AED\"",
  "matchedColumns": [
    20
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user clicks on search button and search result gets displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BookFlights_stepdef.user_verifies_that_he_she_is_on_flight_booking_page()"
});
formatter.result({
  "duration": 4971300,
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
  "duration": 331002300,
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
  "duration": 3450731200,
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
  "duration": 700889700,
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
  "duration": 981326600,
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
  "duration": 1223900600,
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
  "duration": 294996800,
  "status": "passed"
});
formatter.match({
  "location": "BookFlights_stepdef.user_clicks_on_search_button_and_search_result_gets_displayed()"
});
formatter.result({
  "duration": 11362785900,
  "status": "passed"
});
formatter.after({
  "duration": 5886161600,
  "status": "passed"
});
});