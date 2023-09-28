package org.Pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoSce2 extends PojoSce1{
	public PojoSce2() {
		PageFactory.initElements(driver,this);
	}
	
	//2.private WebElements
	@FindBy(xpath="//a[text()='Women’s Health']")
	private WebElement WomensHealth;

	public WebElement getWomensHealth() {
		return WomensHealth;
	}

	
	
}
