package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Book_Hotels_Page
{
	WebDriver ldriver;
	public Book_Hotels_Page(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);	
	}
	
	/*web elements locations */
	@FindBy(xpath = "(//input[@type='text'][contains(@id,'TextBoxMarketOrigin1')])[2]")
	public WebElement DestinationCity_editbox;
	@FindBy(xpath = "//input[@name='ctl00$mainContent$txt_Fromdate_MST'][contains(@id,'MST')]")
	public WebElement CheckInDate_datepicker;
	@FindBy(xpath = "//input[@name='ctl00$mainContent$txt_Todate_MST'][contains(@id,'MST')]")
	public WebElement CheckOutDate_datepicker;
	@FindBy(xpath = "//select[contains(@id,'ddl_Adult_MST')]")
	public WebElement Adult_dropdown;
	@FindBy(xpath = "//select[contains(@id,'ddl_Child_MST')]")
	public WebElement Child_dropdown;
	@FindBy(xpath = "//select[contains(@id,'ddl_Infant_MST')]")
	public WebElement Infant_dropdown;
	@FindBy(xpath = "//input[@type='submit'][contains(@id,'MST')]")
	public WebElement FindHotels_button;
}
