package org.Pojoclass;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JVMReport {
	public static void generateJVMReport(String jsonPath) {
		File f=new File(System.getProperty("user.dir")+"\\target\\Reports\\cucumber");
		
		Configuration con=new Configuration(f,"Facebook project");
		con.addClassifications("Browser Name","Chrome");
		con.addClassifications("Browser Version","116");
		con.addClassifications("OS","Linux");
		con.addClassifications("Time Zone","IST");
		
		List<String> li=new ArrayList<String>();
		li.add(jsonPath);
		
		ReportBuilder r=new ReportBuilder(li,con);
		r.generateReports();
	}
}
