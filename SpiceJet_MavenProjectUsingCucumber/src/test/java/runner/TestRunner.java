package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features/Book_Flights.feature",
glue="stepdefinitions",
dryRun=false,
strict=true,
monochrome=true,
format={"pretty","html:test-output"})
public class TestRunner 
{

}
