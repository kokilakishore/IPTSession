package org.Runner;

import org.Pojoclass.JVMReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@cucumber.api.CucumberOptions(features="src\\test\\resources",glue="org.stepDefinition",strict=false,monochrome=true,
plugin={"html:target\\Reports",
		"junit:target\\Reports\\healthline.xml",
		"json:target\\Reports\\health.json"})

public class HealthlineRunner extends JVMReport {
	@AfterClass
	public static void callReport() {
		generateJVMReport(System.getProperty("user.dir")+"\\target\\Reports\\face.json");
	}
}
