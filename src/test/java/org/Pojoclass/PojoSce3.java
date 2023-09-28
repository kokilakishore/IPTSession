package org.Pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoSce3 extends PojoSce2{
	public PojoSce3() {
		PageFactory.initElements(driver,this);
	}
	
	//2.private WebElements
	@FindBy(xpath="//a[text()='Birth Control for Acne: How It Works, Options, and More Uses']")
	private WebElement AcneTreatement;

	public WebElement getAcneTreatement() {
		return AcneTreatement;
	}
	
	
	
	
}
