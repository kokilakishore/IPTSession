package org.Pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoSce1 extends LibGlobal{
	public PojoSce1() {
		PageFactory.initElements(driver,this);
	}
	
	//2.private WebElements
	@FindBy(xpath="//div[text()='Product Reviews']")
	private WebElement productReviews ;

	public WebElement getProductReviews() {
		return productReviews;
	}
	

	}
	
	
	

