$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/product.feature");
formatter.feature({
  "line": 2,
  "name": "Product_Store Website",
  "description": "",
  "id": "product-store-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" with valid and invalid details",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "product-store-website;login-into-product-store-website;;1"
    },
    {
      "cells": [
        "anwesh",
        "anwi@12"
      ],
      "line": 14,
      "id": "product-store-website;login-into-product-store-website;;2"
    },
    {
      "cells": [
        "anweshd",
        "anwi@123"
      ],
      "line": 15,
      "id": "product-store-website;login-into-product-store-website;;3"
    },
    {
      "cells": [
        "danwesh",
        "anwi@1234"
      ],
      "line": 16,
      "id": "product-store-website;login-into-product-store-website;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anwesh\" and \"anwi@12\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 22205708401,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 3176538300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anwesh",
      "offset": 22
    },
    {
      "val": "anwi@12",
      "offset": 35
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8868523200,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 439394500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"anweshd\" and \"anwi@123\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 11736566501,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 1348913000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anweshd",
      "offset": 22
    },
    {
      "val": "anwi@123",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 9391395300,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 3467666699,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login into Product_Store Website",
  "description": "",
  "id": "product-store-website;login-into-product-store-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TC_01_Login"
    },
    {
      "line": 1,
      "name": "@Product_Store"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "The user launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Clicking on login to navigate Login Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "The user login using \"danwesh\" and \"anwi@1234\" with valid and invalid details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Clicking on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstep.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 13591916199,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.clicking_on_login_to_navigate_Login_Page()"
});
formatter.result({
  "duration": 148834400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "danwesh",
      "offset": 22
    },
    {
      "val": "anwi@1234",
      "offset": 36
    }
  ],
  "location": "Loginstep.the_user_login_using_and_with_valid_and_invalid_details(String,String)"
});
formatter.result({
  "duration": 8446867699,
  "status": "passed"
});
formatter.match({
  "location": "Loginstep.click_on_login_Button()"
});
formatter.result({
  "duration": 149268601,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Fill contact in Product_Store",
  "description": "",
  "id": "product-store-website;fill-contact-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@TC_02_contact"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Clicking on contact to navigate contact Page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The user filling contactdetails using email as \"anwesh@gmail.com\" and name as \"anwesh1\" and message as \"hello\" details",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Clicking on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "contactdetailstep.user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 10822562099,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.clicking_on_contact_to_navigate_contact_Page()"
});
formatter.result({
  "duration": 1938474000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "anwesh@gmail.com",
      "offset": 48
    },
    {
      "val": "anwesh1",
      "offset": 79
    },
    {
      "val": "hello",
      "offset": 104
    }
  ],
  "location": "contactdetailstep.the_user_filling_contactdetails_using_email_as_and_name_as_message_as_details(String,String,String)"
});
formatter.result({
  "duration": 17933690501,
  "status": "passed"
});
formatter.match({
  "location": "contactdetailstep.click_on_close_Button()"
});
formatter.result({
  "duration": 3195120200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Add to cart in Product_Store",
  "description": "",
  "id": "product-store-website;add-to-cart-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@TC_03_add"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "Launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "Clicking on product to navigate product Page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "The user clicks add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Clicking on close browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Addtocartstep.launch_the_chrome_application()"
});
formatter.result({
  "duration": 9879115000,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.clicking_on_product_to_navigate_product_Page()"
});
formatter.result({
  "duration": 738860699,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.the_user_clicks_add_to_cart()"
});
formatter.result({
  "duration": 16135452000,
  "status": "passed"
});
formatter.match({
  "location": "Addtocartstep.click_on_close_browser_Button()"
});
formatter.result({
  "duration": 3125071701,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Navigate in Product_Store",
  "description": "",
  "id": "product-store-website;navigate-in-product-store",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@TC_04_next"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "To launch the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Clicking on next to navigate next Page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "Clicking on browser button",
  "keyword": "Then "
});
formatter.match({
  "location": "Nextpagestep.to_launch_the_chrome_application()"
});
formatter.result({
  "duration": 8612927699,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.clicking_on_next_to_navigate_next_Page()"
});
formatter.result({
  "duration": 7832379100,
  "status": "passed"
});
formatter.match({
  "location": "Nextpagestep.click_on_browser_Button()"
});
formatter.result({
  "duration": 3300843700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Selecting category",
  "description": "",
  "id": "product-store-website;selecting-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@TC_05_category"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "For launching the Chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "Clicking on category to navigate phone Page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "The user clicking on category",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on close button",
  "keyword": "Then "
});
formatter.match({
  "location": "Categorystep.for_launching_the_chrome_application()"
});
formatter.result({
  "duration": 8146883299,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.clicking_on_category_to_navigate_phone_Page()"
});
formatter.result({
  "duration": 193956601,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.the_user_clicking_on_category()"
});
formatter.result({
  "duration": 15454833600,
  "status": "passed"
});
formatter.match({
  "location": "Categorystep.click_on_close_Button()"
});
formatter.result({
  "duration": 3201534701,
  "status": "passed"
});
});