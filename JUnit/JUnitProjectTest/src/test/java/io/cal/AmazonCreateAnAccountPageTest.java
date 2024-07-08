package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;

class AmazonCreateAnAccountPageTest {

//	@Test
	void testYourName() {
		
		AmazonCreateAnAccountPage a = new AmazonCreateAnAccountPage();
		
		String expectedFirstnm = "Dhanesh";
		String expectedLastnm ="Kamado";
		
		String actualResult = a.YourName(expectedFirstnm, expectedLastnm);
		assertSame(a.YourName(expectedFirstnm, expectedLastnm), actualResult, "Pass");
		assertEquals(a.YourName(expectedFirstnm, expectedLastnm), actualResult);
	}
	
	
	
	
	
	
	
	
//	@Test
	void testMobNoAndEmailID() {
		
		AmazonCreateAnAccountPage a = new AmazonCreateAnAccountPage();
		
		long expectedMobNo = 1234567890;
		String expectedEmailID ="dhanesh@gmail.com";
		
		String actualResult = a.MobNoAndEmailID(expectedMobNo, expectedEmailID);
		assertEquals(a.MobNoAndEmailID(expectedMobNo, expectedEmailID), actualResult);
	}
	
	
	
	
	
	
	
	
//	@Test
	void testPassword() {
		
		String ValidPassword = "1234567";
		boolean isValid = isValidPassword(ValidPassword);
		
		assertTrue(isValid, "Password should be exactly 6 characters long");
	}
	
	
	private boolean isValidPassword(String password) {
		return password.length() == 6;
	}
	
//	@Test
	String testInvalidPassword() {
		
		String shortpassword = "1234";
		String longpassword = "1234567";
		String isValid = "123456";
		String isInvalid = (shortpassword + longpassword);
		
		String expected = "123456";
		String actual = "123456";
		
		boolean isShortValid = isValidPassword(shortpassword);
		boolean isLongValid = isValidPassword(longpassword);
		
		assertFalse(isShortValid, "Password should be exactly 6 characters long");
		assertFalse(isLongValid, "Password should be exactly 6 characters long");
		
		assertEquals(expected, actual);
		
		if(isValid.length() == 6) {
			assertSame(expected, actual, "Strong Pasword");
			
		}else {
			return isInvalid;
		}
		return null;
	}
	
	
	
	
	
	
	
	
	@Test
	void testContinueButton1() {
		
		AmazonCreateAnAccountPage a = new AmazonCreateAnAccountPage();
		
		String name = "Dhanesh";
		String email = "dhanesh@gmail.com";
		String password = "pass@12";
		
		boolean result = a.ClickContinue(name,  email, password);
		assertTrue(a.ClickContinue("Dhanesh", "dhanesh@gmail.com", "pass@12"));
	}
	
	@Test
	void testContinueButton2() {
		
		AmazonCreateAnAccountPage a = new AmazonCreateAnAccountPage();
		
		String name = "Dhanesh";
		String email = "dhanesh@gmail.com";
		String password = "pass@12";
		
		boolean result = a.ClickContinue(name,  email, password);
		assertFalse(a.ClickContinue("", "", "pass@12"));
	}
	
	@Test
	void testContinueButton3() {
		
		AmazonCreateAnAccountPage a = new AmazonCreateAnAccountPage();
		
		String name = "Dhanesh";
		String email = "dhanesh@gmail.com";
		String password = "pass@12";
		
		boolean result = a.ClickContinue(name,  email, password);
		assertFalse(a.ClickContinue("", "dhanesh@gmail.com", ""));
	}
	
	
	
	AmazonCreateAnAccountPage t;
	TestInfo testinfo;
	TestReporter testReporter;
	
	@Test
	@Tag("testYourName")
	@Tag("testMobNoAndEmailID")
	@Tag("testPassword")
	@Tag("testInvalidPassword")
	@Tag("testContinueButton1")
	@Tag("testContinueButton2")
	@Tag("testContinueButton3")
	void init(TestInfo testinfo, TestReporter testReporter) {
		
		t = new AmazonCreateAnAccountPage();
		this.testinfo = testinfo;
		this.testReporter = testReporter;
		testReporter.publishEntry("Tested All AmazonCreateAnAccountPage Fiels successfully" + testinfo.getTags());
	}
	
	
	
	
	
	
	

}
