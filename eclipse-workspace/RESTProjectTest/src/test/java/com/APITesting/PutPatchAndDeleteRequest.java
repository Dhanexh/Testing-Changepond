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

public class PutPatchAndDeleteRequest {

	//@Test
	public void PUTRequest(){

		JSONObject request = new JSONObject();
	
		request.put("name","Dhanesh");
	    request.put("job","Software Developer");
	
	    System.out.println(request.toJSONString());
	    
	    baseURI = "https://reqres.in/api";
	
	    given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).body(request.toJSONString()).post("/users/2").then().statusCode(200).log().all();

	}
	
	
	@Test
	public void PATCHRequest(){

		JSONObject request = new JSONObject();
		
		request.put("name","Dhanesh");
	    request.put("job","Frontend Developer");
	
	    System.out.println(request.toJSONString());
	
	    baseURI = "https://reqres.in/api";

	    given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).body(request.toJSONString()).patch("/users/2").then().statusCode(200).log().all();
	}

	
	
	//@Test
	public void DELETERequest(){

		baseURI = "https://reqres.in/";
		when().delete("/api/users?page=2").then().statusCode(204).log().all();

	}

}

