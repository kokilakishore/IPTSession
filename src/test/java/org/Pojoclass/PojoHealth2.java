package org.Pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoHealth2 extends PojoHealthline {
	public PojoHealth2() {
		PageFactory.initElements(driver,this);
	}
	
	//2.private WebElements
	@FindBy(xpath="//a[text()='Special Diets']")
	private WebElement SpecialDiets;

	public WebElement getSpecialDiets() {
		return SpecialDiets;
	}

	
	}
	

