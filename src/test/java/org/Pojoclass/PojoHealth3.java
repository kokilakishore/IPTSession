package org.Pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoHealth3 extends PojoHealth2{
	public PojoHealth3() {
		PageFactory.initElements(driver,this);
	}
	
	//2.private WebElements
	@FindBy(xpath="//a[text()='The 9 Best Diet Plans for Your Overall Health']")
	private WebElement BestDietPlan;

	public WebElement getBestDietPlan() {
		return BestDietPlan;
	}

	
	}

