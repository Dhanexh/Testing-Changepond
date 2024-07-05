package com.APITesting;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import java.util.HashMap;
import java.util.Map;
import javax.swing.text.AbstractDocument.Content;
import org.json.simple.JSONObject;
import org.testng.Assert;
import org.testng.annotations.Test;
import io.restassured.http.ContentType;
import io.restassured.response.Response;


public class ReactProjectPutPatchDelete {

	@Test
	public void PUTRequest(){

		JSONObject request = new JSONObject();
	
		request.put( "userId", "manikandan@gmail.com");
	    request.put( "userPass", "manikandan@123");
		
	    System.out.println(request.toJSONString());
	
	    baseURI = "http://localhost:8888/";
	
	    given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).body(request.toJSONString()).post("/user").then().statusCode(201).log().all();

	}
	

	@Test
	public void PATCHRequest(){

	JSONObject request = new JSONObject();

	request.put("userId", "manikandan@gmail.com");
    request.put("userPass", "manikandan@12345");

    System.out.println(request.toJSONString());

    baseURI = "http://localhost:8888/";

    given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).body(request.toJSONString()).patch("/user/3").then().statusCode(200).log().all();

	}

	
	
	@Test
	public void DELETERequest(){

		baseURI = "http://localhost:8888/";

		when().delete("/user").then().statusCode(404).log().all();

	}

}