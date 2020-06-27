package stepdefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.Book_Flights_Page;
import utilities.ReadConfig;

public class BookFlights_stepdef 
{
	WebDriver driver;
	Book_Flights_Page flights;
	ReadConfig readconfig=new ReadConfig();
	public String baseURL=readconfig.getApplicationURL();
	@Before
	public void setup() throws Exception
	{
		String browser=readconfig.getBrowserName();
		switch (browser) 
		{
		case "chrome": System.setProperty("webdriver.chrome.driver", readconfig.getChromePath());
		               driver=new ChromeDriver();
		               System.out.println("chrome browser launched");
		               break;
		case "firefox": System.setProperty("webdriver.gecko.driver", readconfig.getFirefoxpath());
                        driver=new FirefoxDriver();
                        System.out.println("firefox browser launched");
                        break;
		default: System.out.println("invalid browser");
			break;
		}
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get(baseURL);
		System.out.println("webpage launched");
	}
	@After
	public void tearDown() throws Exception
	{
		Thread.sleep(5000);
		driver.quit();
	}
	//book flights oneway
	@Given("^user is on flights booking page$")
	public void user_is_on_flights_booking_page() throws Throwable 
	{
		 Assert.assertEquals("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets", driver.getTitle());
		    System.out.println("page title verified");
	}

	@When("^user selects trip type as oneway \"([^\"]*)\"$")
	public void user_selects_trip_type_as_oneway(String trip_type) throws Throwable
	{
		
		flights=new Book_Flights_Page(driver);
	    flights.SetTripType(trip_type);
	}

	@When("^selects departure city \"([^\"]*)\", arrival city \"([^\"]*)\"$")
	public void selects_departure_city_arrival_city(String departure_city, String arrival_city) throws Throwable 
	{
		WebDriverWait wait=new WebDriverWait(driver, 10);

		wait.until(ExpectedConditions.visibilityOf(flights.DepartureCity_editbox));
		  flights.SetDepartureCity(departure_city);
		  wait.until(ExpectedConditions.visibilityOf(flights.ArrivalCity_editbox));	
		  flights.SetArrivalCity(driver,arrival_city);
	}

	@When("^selects depart month\"([^\"]*)\",depart date\"([^\"]*)\"$")
	public void selects_depart_month_depart_date(String depMonth, String depDate) throws Throwable 
	{
		flights.SetDepartDate(driver, depMonth, depDate);
	}

	@When("^selects passengers count of adult \"([^\"]*)\",child \"([^\"]*)\",infant \"([^\"]*)\"$")
	public void selects_passengers_count_of_adult_child_infant(String adult, String child, String infant) throws Throwable 
	{
		WebDriverWait wait=new WebDriverWait(driver, 10);

		wait.until(ExpectedConditions.visibilityOf(flights.Passengers));	
		  flights.setPassengers(adult, child, infant);
	}

	@When("^selects currency type \"([^\"]*)\"$")
	public void selects_currency_type(String currency) throws Throwable 
	{
		flights.setCurrencyType(currency);
	}

	@Then("^user clicks on search button and search result is displayed$")
	public void user_clicks_on_search_button_and_search_result_is_displayed() throws Throwable
	{
		flights.FindFlights_button.click();
		Thread.sleep(5000);
		flights.captureScreen(driver, "OnewayFlight", "passed");
	}

	@Given("^user verifies that he/she is on flight booking page$")
	public void user_verifies_that_he_she_is_on_flight_booking_page() throws Throwable 
	{
		Assert.assertEquals("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets", driver.getTitle());
	    System.out.println("page title verified");
	}

	@When("^user selects trip type as roundtrip \"([^\"]*)\"$")
	public void user_selects_trip_type_as_roundtrip(String arg1) throws Throwable 
	{
		flights=new Book_Flights_Page(driver);
		WebDriverWait wait=new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOf(flights.RoundTrip_radio));
		 flights.SetTripType("roundtrip");
	}

	@When("^user selects departure city \"([^\"]*)\", arrival city \"([^\"]*)\"$")
	public void user_selects_departure_city_arrival_city(String departure_city, String arrival_city) throws Throwable
	{
		WebDriverWait wait=new WebDriverWait(driver, 10);

		wait.until(ExpectedConditions.visibilityOf(flights.DepartureCity_editbox));
		  flights.SetDepartureCity(departure_city);
		  wait.until(ExpectedConditions.visibilityOf(flights.ArrivalCity_editbox));	
		  flights.SetArrivalCity(driver,arrival_city);
	}

	@When("^user selects depart month\"([^\"]*)\",depart date\"([^\"]*)\"$")
	public void user_selects_depart_month_depart_date(String depMonth, String depDate) throws Throwable
	{
		flights.SetDepartDate(driver, depMonth, depDate);
	}

	@When("^selects return month\"([^\"]*)\",return date\"([^\"]*)\"$")
	public void selects_return_month_return_date(String retMonth, String retDate) throws Throwable
	{
		flights.SetReturnDate(driver, retMonth, retDate);
	}

	@When("^selects passengers count such as adult \"([^\"]*)\",child \"([^\"]*)\",infant \"([^\"]*)\"$")
	public void selects_passengers_count_such_as_adult_child_infant(String adult, String child, String infant) throws Throwable
	{
		WebDriverWait wait=new WebDriverWait(driver, 10);

		wait.until(ExpectedConditions.visibilityOf(flights.Passengers));	
		  flights.setPassengers(adult, child, infant);
	}

	@When("^selects type of currency \"([^\"]*)\"$")
	public void selects_type_of_currency(String currency) throws Throwable
	{
		flights.setCurrencyType(currency);
	}

	@Then("^user clicks on search button and search result gets displayed$")
	public void user_clicks_on_search_button_and_search_result_gets_displayed() throws Throwable 
	{
		flights.FindFlights_button.click();
		Thread.sleep(5000);
		flights.captureScreen(driver, "RoundTripFlight", "passed");
	}


}
