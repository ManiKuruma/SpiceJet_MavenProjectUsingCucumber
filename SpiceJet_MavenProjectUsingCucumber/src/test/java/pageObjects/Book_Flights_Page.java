package pageObjects;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import ru.yandex.qatools.ashot.AShot;
import ru.yandex.qatools.ashot.Screenshot;
import ru.yandex.qatools.ashot.shooting.ShootingStrategies;
public class Book_Flights_Page
{
	WebDriver ldriver;
	public Book_Flights_Page(WebDriver rdriver)
	{
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	/*web elements locations*/
	@FindBy(xpath = "//input[contains(@id,'ctl00_mainContent_rbtnl_Trip_0')]")
	public WebElement OneWay_radio;
	@FindBy(xpath = "//label[contains(text(), 'Round Trip')]")
	public WebElement RoundTrip_radio;
	@FindBy(xpath = "//input[contains(@value,'TripPlanner')]")
	public WebElement MultiCity_radio;
	//from
	@FindBy(id = "ctl00_mainContent_ddl_originStation1_CTXT")
	public WebElement DepartureCity_editbox;
	//to
	@FindBy(xpath = "(//input[contains(@id,'CTXT')])[2]")
	public WebElement ArrivalCity_editbox;
	@FindBy(xpath = "//input[@name='ctl00$mainContent$view_date1'][contains(@id,'date1')]")
	public WebElement DepartDate_datepicker;
	@FindBy(xpath = "//input[@name='ctl00$mainContent$view_date2'][contains(@id,'date2')]")
	public WebElement ReturnDate_datepicker;
	@FindBy(xpath = "//div[@class='paxinfo'][contains(.,'1 Adult')]")
	public WebElement Passengers;
	@FindBy(xpath = "//select[@name='ctl00$mainContent$ddl_Adult'][contains(@id,'Adult')]")
	public WebElement Adult_dropdown;
	@FindBy(xpath = "//select[@name='ctl00$mainContent$ddl_Child'][contains(@id,'Child')]")
	public WebElement Child_dropdown;
	@FindBy(xpath = "//select[@name='ctl00$mainContent$ddl_Infant'][contains(@id,'Infant')]")
	public WebElement Infant_dropdown;
	@FindBy(xpath = "//select[@name='ctl00$mainContent$DropDownListCurrency'][contains(@id,'DropDownListCurrency')]")
	public WebElement Currency_dropdown;
	
	//checkboxes
	@FindBy(xpath = "//input[contains(@name,'ctl00$mainContent$chk_friendsandfamily')]")
	public WebElement FamilyAndFriends_checkbox;
	@FindBy(xpath = "//input[contains(@name,'ctl00$mainContent$chk_SeniorCitizenDiscount')]")
	public WebElement SeniorCitizen_checkbox;
	@FindBy(xpath = "//input[contains(@name,'ctl00$mainContent$chk_IndArm')]")
	public WebElement ArmedForces_checkbox;
	@FindBy(xpath = "//input[contains(@name,'ctl00$mainContent$chk_StudentDiscount')]")
	public WebElement Student_checkbox;
	@FindBy(xpath = "//input[contains(@name,'ctl00$mainContent$chk_Unmr')]")
	public WebElement UnaccompaniedMinor_checkbox;
	
	//link
	@FindBy(xpath = "//a[@href='javascript: void(0);'][contains(.,'Special Assistance')]")
	public WebElement SpecialAssistance_link;
	
	//search button
	@FindBy(xpath = "//input[@type='submit'][contains(@id,'FindFlights')]")
	public WebElement FindFlights_button;
	
	//search results web elements for oneway
	@FindBy(xpath = "//table[contains(@id,'availabilityTable0')]")
	public WebElement ChooseADepartFlight_Table;
	@FindBy(xpath = "/html[1]/body[1]/div[15]/form[1]/div[4]/div[1]/div[3]/div[1]/div[2]/div[5]/h2[1]")
	public WebElement FromToCities_Header;
	@FindBy(xpath = "/html[1]/body[1]/div[15]/form[1]/div[4]/div[1]/div[3]/div[1]/div[2]/div[5]/div[1]")
	public WebElement search_msg;
	
	//search results for roundtrip
	@FindBy(xpath = "/html[1]/body[1]/div[15]/form[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")
	public WebElement roundtrip_result_header;
	@FindBy(xpath = "/html[1]/body[1]/div[15]/form[1]/div[4]/div[1]/div[3]/div[1]")
	public WebElement roundtrip_mainContentResult;
	public void SetTripType(String trip)
	{
		switch (trip) 
		{
		case "oneway": OneWay_radio.click();
		               System.out.println("one way trip selected");
			             break;
		case "roundtrip": RoundTrip_radio.click();
		                 System.out.println("round trip selected"); 
		                   break;
		case "multicity": MultiCity_radio.click();
		                  System.out.println("multi city trip selected");
		                       break;
		default: System.out.println("trip type not selected");
			break;
		}
	}
	
	public void SetDepartureCity(String city)
	{
		//wait.until(ExpectedConditions.visibilityOf(DepartureCity_editbox));
		DepartureCity_editbox.clear();
		DepartureCity_editbox.sendKeys(city);
		System.out.println("Entered Departure City: "+DepartureCity_editbox.getAttribute("value"));	
	}
	public void SetArrivalCity(WebDriver driver,String city) 
	{
		ArrivalCity_editbox.sendKeys(city);
		List<WebElement> active_elements_table=driver.findElements(By.tagName("li"));
		for (WebElement e : active_elements_table) 
		{
			if(e.getText().contains(city))
			{
				e.click();
				break;
			}
		
		}
		//Thread.sleep(2000);
		System.out.println("Entered Arrival City: "+ArrivalCity_editbox.getAttribute("value"));	
	}
	public void SetDepartDate(WebDriver driver,String exp_month,String exp_date) throws Exception
	{
		for (int i = 0; i < 4; i++) 
		{
			//identify active month header
			WebDriverWait wait=new WebDriverWait(driver, 10);
			WebElement month_header=driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]"));
			//wait.until(ExpectedConditions.visibilityOf(month_header));
			//get month header text
			String active_month=month_header.getText();
			if (active_month.equals(exp_month)) 
			{
				//select date from active month
				driver.findElement(By.linkText(exp_date)).click();
				break;	
			}
			WebElement next_icon=driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/a[1]/span[1]"));
			next_icon.click();
			Thread.sleep(2000);
		}
		System.out.println("Selected Depart date: "+DepartDate_datepicker.getAttribute("value"));
	}
	public void SetReturnDate(WebDriver driver,String exp_month,String exp_date) throws Exception
	{
		ReturnDate_datepicker.click();
		for (int i = 0; i < 4; i++) 
		{
			WebDriverWait wait=new WebDriverWait(driver, 10);
			//identify active month header
			WebElement month_header=driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]"));
			//get month header text
			String active_month=month_header.getText();
			if (active_month.equals(exp_month)) 
			{
				//select date from active month
				driver.findElement(By.linkText(exp_date)).click();
				break;	
			}
			WebElement next_icon=driver.findElement(By.xpath("/html[1]/body[1]/div[2]/div[2]/div[1]/a[1]/span[1]"));
			next_icon.click();
			Thread.sleep(2000);
		}
		System.out.println("Selected Return date: "+ReturnDate_datepicker.getAttribute("value"));
	}
	public void setPassengers(String adult,String child,String infant)
	{
		Passengers.click();
		Select adult_dp=new Select(Adult_dropdown);
		Select child_dp=new Select(Child_dropdown);
		Select infant_dp=new Select(Infant_dropdown);
		//select no. of adult
		adult_dp.selectByVisibleText(adult);
		WebElement adult_count=adult_dp.getFirstSelectedOption();
		System.out.println("Selected Adult count: "+adult_count.getText());
		//select no.of child
		child_dp.selectByVisibleText(child);
		WebElement child_count=child_dp.getFirstSelectedOption();
		System.out.println("Selected Child count: "+child_count.getText());
		//select no. of infant
		infant_dp.selectByVisibleText(infant);
		WebElement infant_count=infant_dp.getFirstSelectedOption();
		System.out.println("Selected Infant count: "+infant_count.getText());	
	}
	public void setCurrencyType(String currency)
	{
		Select currency_dp=new Select(Currency_dropdown);
		//select currency type
		currency_dp.selectByVisibleText(currency);
		WebElement currency_type=currency_dp.getFirstSelectedOption();
		System.out.println("Selected Currency type: "+currency_type.getText());
	}
	public void captureScreen(WebDriver driver,String tname,String status) throws IOException
	{
		Screenshot sh=new AShot().shootingStrategy(ShootingStrategies.viewportPasting(1000)).takeScreenshot(driver);
		ImageIO.write(sh.getImage(), "PNG", new File("Screenshots\\"+tname+"_"+status+".png"));
	}

}
