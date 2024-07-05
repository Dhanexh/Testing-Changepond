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



public class ReactProjectGetandPost {

	@Test
	public void GETRequest(){

		//1st Validation by ID
		baseURI = "http://localhost:8888/";
		
		given().get("/user/1").then().statusCode(200).body("id", equalTo("1")).log().all();


		//2nd validation by UserID
		given().get("/user/1").then().statusCode(200).body("userId", equalTo("admin@gmail.com")).log().all();
	}

	

	//@Test
	public void GETRequest2() {

		//3rd validation by group
		baseURI ="https://reqres.in/api";

		given().get("/users?page=2").then().statusCode(200).body("data.firstname",hasItems("Lindsay","Tobias")).log().all();
	}



	@Test

	public void POStRequest(){

		Map<String,Object> map = new HashMap<String,Object>();

		JSONObject request = new JSONObject(map);

		request.put("userId", "admin@gmail.com");
        request.put("userPass", "Admin@123445");

        System.out.println(request.toJSONString());

        baseURI = "http://localhost:8888/";

        given().header("Content-Type","application/json").contentType(ContentType.JSON).accept(ContentType.JSON).

        body(request.toJSONString()).post("/user").then().statusCode(201).log().all();

	}

	

	

}
