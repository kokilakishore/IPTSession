package org.Pojoclass;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoHealthline extends LibGlobal{
	//Non-parameterized constructor
		public PojoHealthline() {
			PageFactory.initElements(driver,this);
		}
		//2.private WebElements
		@FindBy(xpath="//div[text()='Nutrition']")
		private WebElement nutrition;

		//3.Getters
				//RightClick ---source----generate getters&setters-----only getters
		public WebElement getNutrition() {
			return nutrition;
		}
		
			
		
		}
		
		
		
		
		

