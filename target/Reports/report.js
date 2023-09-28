$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/healthline.feature");
formatter.feature({
  "name": "Validate the functionality of healthissues through Healthline",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To get solution for healthproblems",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "User should click the Health problems topics",
  "keyword": "When "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_click_the_Health_problems_topics()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should give nutritarian diet",
  "keyword": "And "
});
formatter.match({
  "location": "HealthlineDefinition.userShouldGiveNutritarianDiet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate to the given healthissues",
  "keyword": "Then "
});
formatter.match({
  "location": "HealthlineDefinition.userShouldNavigateToTheGivenHealthissues()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"css-16e3huk\" data-event\u003d\"Landing Page Engagement|Link Click_Find the Right Diet for You_Small Image Listing_1|/nutrition/best-diet-plans\" data-element-event\u003d\"INTERNALLINK|SECTION|Landing Page Engagement|Small Image Listing - Find the Right Diet for You|LINK|...|null1\" href\u003d\"/nutrition/best-diet-plans\" data-testid\u003d\"title-link\"\u003eThe 9 Best Diet Plans for Your Overall Health\u003c/a\u003e is not clickable at point (451, 599). Other element would receive the click: \u003cdiv class\u003d\"css-17xncde\"\u003e\u003c/div\u003e\n  (Session info: MicrosoftEdge\u003d117.0.2045.31)\nBuild info: version: \u00274.10.0\u0027, revision: \u0027c14d967899\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002720.0.2\u0027\nDriver info: org.openqa.selenium.edge.EdgeDriver\nCommand: [cab32dfaa908b7bf3acc2c427eed66c9, clickElement {id\u003d522DD4163877B47408211D22CF428191_element_2207}]\nCapabilities {acceptInsecureCerts: false, browserName: msedge, browserVersion: 117.0.2045.31, fedcm:accounts: true, ms:edgeOptions: {debuggerAddress: localhost:52410}, msedge: {msedgedriverVersion: 117.0.2045.31 (fdd954ad1e8c..., userDataDir: C:\\Users\\ACER\\AppData\\Local...}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:52410/devtoo..., se:cdpVersion: 117.0.2045.31, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[EdgeDriver: msedge on windows (cab32dfaa908b7bf3acc2c427eed66c9)] -\u003e xpath: //a[text()\u003d\u0027The 9 Best Diet Plans for Your Overall Health\u0027]]\nSession ID: cab32dfaa908b7bf3acc2c427eed66c9\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:199)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:132)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:51)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:531)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat java.base/jdk.internal.reflect.DirectMethodHandleAccessor.invoke(DirectMethodHandleAccessor.java:104)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:578)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy20.click(Unknown Source)\r\n\tat org.Pojoclass.LibGlobal.toClick(LibGlobal.java:73)\r\n\tat org.stepDefinition.HealthlineDefinition.userShouldNavigateToTheGivenHealthissues(HealthlineDefinition.java:43)\r\n\tat ✽.User should navigate to the given healthissues(src/test/resources/FeatureFiles/healthline.feature:8)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User should launch the browser and load the url",
  "keyword": "Given "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_launch_the_browser_and_load_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To check product reviews",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User should click product reviews",
  "keyword": "When "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_click_product_reviews()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click WomensHealth",
  "keyword": "And "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_click_WomensHealth()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click AcneTreatement",
  "keyword": "And "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_click_AcneTreatement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User give a page title",
  "keyword": "And "
});
formatter.match({
  "location": "HealthlineDefinition.user_give_a_page_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should navigate the credential page",
  "keyword": "Then "
});
formatter.match({
  "location": "HealthlineDefinition.user_should_navigate_the_credential_page()"
});
formatter.result({
  "status": "passed"
});
});