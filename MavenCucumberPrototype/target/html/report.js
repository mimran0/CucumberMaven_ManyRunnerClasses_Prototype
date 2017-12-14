$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Imran\u0027sFeature.feature");
formatter.feature({
  "line": 1,
  "name": "This feature contains scenarios that has only print statements.",
  "description": "",
  "id": "this-feature-contains-scenarios-that-has-only-print-statements.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 855946679,
  "status": "passed"
});
formatter.before({
  "duration": 756463336,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#(Objecttive is to create different types of runner classes)"
    }
  ],
  "line": 4,
  "name": "Love you",
  "description": "",
  "id": "this-feature-contains-scenarios-that-has-only-print-statements.;love-you",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "this is my first dummy given step",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "this is my first dummy when step",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "this is first dummy then step",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_MC.this_is_my_first_dummy_given_step()"
});
formatter.result({
  "duration": 121494632,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_MC.this_is_my_first_dummy_when_step()"
});
formatter.result({
  "duration": 74779,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_MC.this_is_first_dummy_then_step()"
});
formatter.result({
  "duration": 105570,
  "status": "passed"
});
formatter.after({
  "duration": 1109158125,
  "status": "passed"
});
formatter.after({
  "duration": 761299505,
  "status": "passed"
});
formatter.before({
  "duration": 757777092,
  "status": "passed"
});
formatter.before({
  "duration": 132940,
  "status": "passed"
});
formatter.before({
  "duration": 756918361,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Love you more",
  "description": "",
  "id": "this-feature-contains-scenarios-that-has-only-print-statements.;love-you-more",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Love"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "First",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Second",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Third",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Common.first()"
});
formatter.result({
  "duration": 223358,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Common.second()"
});
formatter.result({
  "duration": 206252,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Common.third()"
});
formatter.result({
  "duration": 204786,
  "status": "passed"
});
formatter.after({
  "duration": 807016086,
  "status": "passed"
});
formatter.after({
  "duration": 105081,
  "status": "passed"
});
formatter.after({
  "duration": 1058284267,
  "status": "passed"
});
formatter.before({
  "duration": 756789331,
  "status": "passed"
});
formatter.before({
  "duration": 814729519,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Love you more for liking me",
  "description": "",
  "id": "this-feature-contains-scenarios-that-has-only-print-statements.;love-you-more-for-liking-me",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@like"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "First",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Second",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Third",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_Common.first()"
});
formatter.result({
  "duration": 74290,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Common.second()"
});
formatter.result({
  "duration": 194033,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_Common.third()"
});
formatter.result({
  "duration": 85042,
  "status": "passed"
});
formatter.after({
  "duration": 806671518,
  "status": "passed"
});
formatter.after({
  "duration": 756666655,
  "status": "passed"
});
formatter.uri("MC.feature");
formatter.feature({
  "line": 1,
  "name": "Mortgage Calculator",
  "description": "",
  "id": "mortgage-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \u003cvhomevalue\u003e \u003cvprincipal\u003e \u003cvinterestRate\u003e \u003cvterm\u003e \u003cvpropertyTax\u003e \u003cvpmi\u003e \u003cvhoi\u003e in the calculator and click on calculate button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \u003cvExpectedPayment\u003e with Actual Payment",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;",
  "rows": [
    {
      "cells": [
        "vhomevalue",
        "vprincipal",
        "vinterestRate",
        "vterm",
        "vpropertyTax",
        "vpmi",
        "vhoi",
        "vExpectedPayment"
      ],
      "line": 9,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;1"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"4\"",
        "\"30\"",
        "\"4.5\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,352.42\""
      ],
      "line": 10,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;2"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"5\"",
        "\"15\"",
        "\"4.7\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,699.13\""
      ],
      "line": 11,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;3"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"3\"",
        "\"10\"",
        "\"4.0\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,757.27\""
      ],
      "line": 12,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 805016615,
  "status": "passed"
});
formatter.before({
  "duration": 756955017,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"200000\" \"100000\" \"4\" \"30\" \"4.5\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \"$1,352.42\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 23464660777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 25
    },
    {
      "val": "30",
      "offset": 29
    },
    {
      "val": "4.5",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 33846336901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,352.42",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 58891293,
  "status": "passed"
});
formatter.after({
  "duration": 909268680,
  "status": "passed"
});
formatter.after({
  "duration": 956961762,
  "status": "passed"
});
formatter.before({
  "duration": 812493982,
  "status": "passed"
});
formatter.before({
  "duration": 754574322,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"200000\" \"100000\" \"5\" \"15\" \"4.7\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \"$1,699.13\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 23719744619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 25
    },
    {
      "val": "15",
      "offset": 29
    },
    {
      "val": "4.7",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 35121176457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,699.13",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 56483227,
  "status": "passed"
});
formatter.after({
  "duration": 907017993,
  "status": "passed"
});
formatter.after({
  "duration": 756226293,
  "status": "passed"
});
formatter.before({
  "duration": 806050319,
  "status": "passed"
});
formatter.before({
  "duration": 809429039,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"200000\" \"100000\" \"3\" \"10\" \"4.0\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \"$1,757.27\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 22736328353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 29
    },
    {
      "val": "4.0",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 33568517933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,757.27",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 57220261,
  "status": "passed"
});
formatter.after({
  "duration": 861876668,
  "status": "passed"
});
formatter.after({
  "duration": 756812303,
  "status": "passed"
});
formatter.uri("MortgateCalculator.feature");
formatter.feature({
  "line": 1,
  "name": "Mortgage Calculator",
  "description": "",
  "id": "mortgage-calculator",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \u003cvhomevalue\u003e \u003cvprincipal\u003e \u003cvinterestRate\u003e \u003cvterm\u003e \u003cvpropertyTax\u003e \u003cvpmi\u003e \u003cvhoi\u003e in the calculator and click on calculate button",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \u003cvExpectedPayment\u003e with Actual Payment",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;",
  "rows": [
    {
      "cells": [
        "vhomevalue",
        "vprincipal",
        "vinterestRate",
        "vterm",
        "vpropertyTax",
        "vpmi",
        "vhoi",
        "vExpectedPayment"
      ],
      "line": 9,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;1"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"4\"",
        "\"30\"",
        "\"4.5\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,352.42\""
      ],
      "line": 10,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;2"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"5\"",
        "\"15\"",
        "\"4.7\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,699.13\""
      ],
      "line": 11,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;3"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"3\"",
        "\"10\"",
        "\"4.0\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,757.27\""
      ],
      "line": 12,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 809026799,
  "status": "passed"
});
formatter.before({
  "duration": 957331745,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"200000\" \"100000\" \"4\" \"30\" \"4.5\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \"$1,352.42\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 22610887563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 25
    },
    {
      "val": "30",
      "offset": 29
    },
    {
      "val": "4.5",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 33978316661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,352.42",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 57591711,
  "status": "passed"
});
formatter.after({
  "duration": 855141221,
  "status": "passed"
});
formatter.after({
  "duration": 807469645,
  "status": "passed"
});
formatter.before({
  "duration": 755663254,
  "status": "passed"
});
formatter.before({
  "duration": 756073803,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"200000\" \"100000\" \"5\" \"15\" \"4.7\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \"$1,699.13\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 23508329990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 25
    },
    {
      "val": "15",
      "offset": 29
    },
    {
      "val": "4.7",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 33882850832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,699.13",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 54579062,
  "status": "passed"
});
formatter.after({
  "duration": 908374271,
  "status": "passed"
});
formatter.after({
  "duration": 756674964,
  "status": "passed"
});
formatter.before({
  "duration": 757357746,
  "status": "passed"
});
formatter.before({
  "duration": 806676895,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Google Chrome Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--google-chrome-browser;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser MC - \"CHROME\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter \"200000\" \"100000\" \"3\" \"10\" \"4.0\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Check \"$1,757.27\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "CHROME",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 23259202039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 29
    },
    {
      "val": "4.0",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 34108544257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,757.27",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 54451988,
  "status": "passed"
});
formatter.after({
  "duration": 854096765,
  "status": "passed"
});
formatter.after({
  "duration": 805167639,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Micorsoft Edge Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Like"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser MC - \"MICROSOFE EDGE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter \u003cvhomevalue\u003e \u003cvprincipal\u003e \u003cvinterestRate\u003e \u003cvterm\u003e \u003cvpropertyTax\u003e \u003cvpmi\u003e \u003cvhoi\u003e in the calculator and click on calculate button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Check \u003cvExpectedPayment\u003e with Actual Payment",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;",
  "rows": [
    {
      "cells": [
        "vhomevalue",
        "vprincipal",
        "vinterestRate",
        "vterm",
        "vpropertyTax",
        "vpmi",
        "vhoi",
        "vExpectedPayment"
      ],
      "line": 21,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;1"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"4\"",
        "\"30\"",
        "\"4.5\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,352.42\""
      ],
      "line": 22,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;2"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"5\"",
        "\"15\"",
        "\"4.7\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,699.13\""
      ],
      "line": 23,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;3"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"3\"",
        "\"10\"",
        "\"4.0\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,757.27\""
      ],
      "line": 24,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 756638308,
  "status": "passed"
});
formatter.before({
  "duration": 855157839,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Micorsoft Edge Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Like"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser MC - \"MICROSOFE EDGE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter \"200000\" \"100000\" \"4\" \"30\" \"4.5\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Check \"$1,352.42\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MICROSOFE EDGE",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 18294851374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 25
    },
    {
      "val": "30",
      "offset": 29
    },
    {
      "val": "4.5",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 31225531160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,352.42",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 29080551,
  "status": "passed"
});
formatter.after({
  "duration": 810125017,
  "status": "passed"
});
formatter.after({
  "duration": 868667343,
  "status": "passed"
});
formatter.before({
  "duration": 861249115,
  "status": "passed"
});
formatter.before({
  "duration": 810138213,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Micorsoft Edge Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Like"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser MC - \"MICROSOFE EDGE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter \"200000\" \"100000\" \"5\" \"15\" \"4.7\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Check \"$1,699.13\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MICROSOFE EDGE",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 18356981116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 25
    },
    {
      "val": "15",
      "offset": 29
    },
    {
      "val": "4.7",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 31217172578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,699.13",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 26181783,
  "status": "passed"
});
formatter.after({
  "duration": 906589849,
  "status": "passed"
});
formatter.after({
  "duration": 826280607,
  "status": "passed"
});
formatter.before({
  "duration": 856754581,
  "status": "passed"
});
formatter.before({
  "duration": 755599228,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Micorsoft Edge Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--micorsoft-edge-browser;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Like"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Open Browser MC - \"MICROSOFE EDGE\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Enter \"200000\" \"100000\" \"3\" \"10\" \"4.0\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Check \"$1,757.27\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "MICROSOFE EDGE",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 50662443715,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 29
    },
    {
      "val": "4.0",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 31210548078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,757.27",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 23143231,
  "status": "passed"
});
formatter.after({
  "duration": 814274983,
  "status": "passed"
});
formatter.after({
  "duration": 872163363,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Firefox Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Love"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Open Browser MC - \"FIREFOX\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter \u003cvhomevalue\u003e \u003cvprincipal\u003e \u003cvinterestRate\u003e \u003cvterm\u003e \u003cvpropertyTax\u003e \u003cvpmi\u003e \u003cvhoi\u003e in the calculator and click on calculate button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check \u003cvExpectedPayment\u003e with Actual Payment",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;",
  "rows": [
    {
      "cells": [
        "vhomevalue",
        "vprincipal",
        "vinterestRate",
        "vterm",
        "vpropertyTax",
        "vpmi",
        "vhoi",
        "vExpectedPayment"
      ],
      "line": 33,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;1"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"4\"",
        "\"30\"",
        "\"4.5\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,352.42\""
      ],
      "line": 34,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;2"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"5\"",
        "\"15\"",
        "\"4.7\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,699.13\""
      ],
      "line": 35,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;3"
    },
    {
      "cells": [
        "\"200000\"",
        "\"100000\"",
        "\"3\"",
        "\"10\"",
        "\"4.0\"",
        "\"1.26\"",
        "\"1500\"",
        "\"$1,757.27\""
      ],
      "line": 36,
      "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1108835551,
  "status": "passed"
});
formatter.before({
  "duration": 97261,
  "status": "passed"
});
formatter.before({
  "duration": 756186215,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Firefox Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Love"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Open Browser MC - \"FIREFOX\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter \"200000\" \"100000\" \"4\" \"30\" \"4.5\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check \"$1,352.42\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 27342417870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 25
    },
    {
      "val": "30",
      "offset": 29
    },
    {
      "val": "4.5",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 34022788399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,352.42",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 15771923,
  "status": "passed"
});
formatter.after({
  "duration": 807114325,
  "status": "passed"
});
formatter.after({
  "duration": 47409,
  "status": "passed"
});
formatter.after({
  "duration": 763295554,
  "status": "passed"
});
formatter.before({
  "duration": 757935447,
  "status": "passed"
});
formatter.before({
  "duration": 131473,
  "status": "passed"
});
formatter.before({
  "duration": 757520011,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Firefox Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Love"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Open Browser MC - \"FIREFOX\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter \"200000\" \"100000\" \"5\" \"15\" \"4.7\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check \"$1,699.13\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 27143583633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "5",
      "offset": 25
    },
    {
      "val": "15",
      "offset": 29
    },
    {
      "val": "4.7",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 33675187838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,699.13",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 23766386,
  "status": "passed"
});
formatter.after({
  "duration": 757349437,
  "status": "passed"
});
formatter.after({
  "duration": 45943,
  "status": "passed"
});
formatter.after({
  "duration": 808271682,
  "status": "passed"
});
formatter.before({
  "duration": 808717421,
  "status": "passed"
});
formatter.before({
  "duration": 97261,
  "status": "passed"
});
formatter.before({
  "duration": 1160782213,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Users are able to calculate mortgate payment in Mortgage Calculator website. -Firefox Browser",
  "description": "",
  "id": "mortgage-calculator;users-are-able-to-calculate-mortgate-payment-in-mortgage-calculator-website.--firefox-browser;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Love"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Open Browser MC - \"FIREFOX\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "Enter \"200000\" \"100000\" \"3\" \"10\" \"4.0\" \"1.26\" \"1500\" in the calculator and click on calculate button",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Check \"$1,757.27\" with Actual Payment",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "FIREFOX",
      "offset": 19
    }
  ],
  "location": "StepDefinition_MC.open_Browser_MC(String)"
});
formatter.result({
  "duration": 26005939764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200000",
      "offset": 7
    },
    {
      "val": "100000",
      "offset": 16
    },
    {
      "val": "3",
      "offset": 25
    },
    {
      "val": "10",
      "offset": 29
    },
    {
      "val": "4.0",
      "offset": 34
    },
    {
      "val": "1.26",
      "offset": 40
    },
    {
      "val": "1500",
      "offset": 47
    }
  ],
  "location": "StepDefinition_MC.enter_Many_Data_in_the_calculator_and_click_on_calculate_button(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 34183361428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,757.27",
      "offset": 7
    }
  ],
  "location": "StepDefinition_MC.check_Expected_Payment_with_Actual_Payment(String)"
});
formatter.result({
  "duration": 15849634,
  "status": "passed"
});
formatter.after({
  "duration": 858332262,
  "status": "passed"
});
formatter.after({
  "duration": 45942,
  "status": "passed"
});
formatter.after({
  "duration": 758532209,
  "status": "passed"
});
formatter.uri("myFeature_S.feature");
formatter.feature({
  "line": 1,
  "name": "this is my dummy feature file",
  "description": "",
  "id": "this-is-my-dummy-feature-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 757118748,
  "status": "passed"
});
formatter.before({
  "duration": 860711491,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Love you",
  "description": "",
  "id": "this-is-my-dummy-feature-file;love-you",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "this is my first dummy given step",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "this is my first dummy when step",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "this is first dummy then step",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_MC.this_is_my_first_dummy_given_step()"
});
formatter.result({
  "duration": 75756,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_MC.this_is_my_first_dummy_when_step()"
});
formatter.result({
  "duration": 48386,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_MC.this_is_first_dummy_then_step()"
});
formatter.result({
  "duration": 50830,
  "status": "passed"
});
formatter.after({
  "duration": 755468732,
  "status": "passed"
});
formatter.after({
  "duration": 1113376027,
  "status": "passed"
});
});