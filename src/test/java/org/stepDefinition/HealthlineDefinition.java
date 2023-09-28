package org.stepDefinition;

import org.openqa.selenium.WebElement;
import org.Pojoclass.LibGlobal;
import org.Pojoclass.PojoHealth3;
import org.Pojoclass.PojoSce3;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HealthlineDefinition extends LibGlobal{
	@Given("User should launch the browser and load the url")
	public void user_should_launch_the_browser_and_load_the_url() {
		
		openEdge();
		launchUrl("https://www.healthline.com/"); 
		maxWindow();
	}

	@When("User should click the Health problems topics")
	public void user_should_click_the_Health_problems_topics() {
		PojoHealth3 l=new PojoHealth3();
	    
	    WebElement nutrition=l.getNutrition();
	    toClick(nutrition);
	   	
	}
	@When("User should give nutritarian diet")
	public void userShouldGiveNutritarianDiet() {
		
		PojoHealth3 l=new PojoHealth3();
		
		 WebElement SpecialDiets=l.getSpecialDiets();
		 toClick(SpecialDiets);
	}

	@Then("User should navigate to the given healthissues")
	public void userShouldNavigateToTheGivenHealthissues() {
		
		PojoHealth3 l=new PojoHealth3();
		
		WebElement BestDietPlan=l.getBestDietPlan();
	   	toClick(BestDietPlan);
		
		
	}
	@When("User should click product reviews")
	public void user_should_click_product_reviews() {
		PojoSce3 l=new PojoSce3();
		
		WebElement productReviews=l.getProductReviews();
	   	toClick(productReviews);
		
	}
	
	@When("User should click WomensHealth")
	public void user_should_click_WomensHealth() {
		PojoSce3 l=new PojoSce3();
		
		WebElement WomensHealth=l.getWomensHealth();
	   	toClick(WomensHealth);
		
	}
	@When("User should click AcneTreatement")
	public void user_should_click_AcneTreatement() {
		PojoSce3 l=new PojoSce3();
		
		WebElement AcneTreatment=l.getAcneTreatement();
	   	toClick(AcneTreatment);
	}


	@When("User give a page title")
	public void user_give_a_page_title() {
	   String title=driver.getTitle();
	   System.out.println(title);
	}

	@Then("User should navigate the credential page")
	public void user_should_navigate_the_credential_page() {
	    
		
	}
}