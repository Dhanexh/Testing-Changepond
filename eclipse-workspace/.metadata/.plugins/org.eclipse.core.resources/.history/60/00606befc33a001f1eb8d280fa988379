package com.APITesting;
import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
//import static org.hamcrest.Matchers.*;

public class JSONSchemaValidator {
	
	public void testGel() {
		
		baseURI = "https://reqres.in/api";
		
		given().get("/users?page=2").then().assertThat()
		.body(matchesJsonSchemaInClasspath("schema.json")).statusCode(200);
	}

}
