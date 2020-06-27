package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Deals_Page 
{
	WebDriver ldriver;
	public Deals_Page(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(xpath = "//a[contains(.,'DEALS')]")
	public WebElement DEALS_link;
	@FindBy(xpath = "//a[@href='#'][contains(.,'Flight')]")
	public WebElement Flight_link;
	@FindBy(xpath = "//a[@href='#'][contains(.,'Boarding Pass')]")
	public WebElement BoardingPass_link;
	
}
