package com.cucumber.MavenCucumberPrototype;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format={"pretty","json:target/json/output.json"},
		features="src/test/resource",
		tags="@Love"
		)
public class RunnerTest_With_Json_report {

}
