package io.cal;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;


class OrganicRegisterPageTest {

	//@Test
	void testName() {

		OrganicRegisterPage o = new OrganicRegisterPage();

		String expectedName = "Dhanesh";
		String actualResult = o.UserName(expectedName);

		assertSame(o.UserName(expectedName), actualResult,"Please Provide the UserName");
		assertEquals(o.UserName(expectedName), actualResult);
	}

	
	
	//@Test
	void testEmailId() {

		OrganicRegisterPage o = new OrganicRegisterPage();

		String expectedEmailID = "dhanesh@gmail.com";
		String actualResult = o.EmailId(expectedEmailID);

		assertSame(o.EmailId(expectedEmailID), actualResult,"Please Provide the Email");
		assertEquals(o.EmailId(expectedEmailID), actualResult);
	}

	

	

	//@Test
	void testContactNo() {

		OrganicRegisterPage o = new OrganicRegisterPage();

		Long expectedContactNo = 7878787878l;
		Long actualResult = o.ContactNo(expectedContactNo);

		assertSame(o.ContactNo(expectedContactNo), actualResult,"Please Provide the ContactNumber");
		assertEquals(o.ContactNo(expectedContactNo), actualResult);
	}

	

	//@Test
	void testPassword() {

		OrganicRegisterPage o = new OrganicRegisterPage();

		String expectedpass = "dhanesh";
		boolean actualResult = o.CheckPassword(expectedpass);

		assertSame(o.CheckPassword(expectedpass), actualResult,"Password must be greater than 6 character or atleast 6 character");
		assertEquals(o.CheckPassword(expectedpass), actualResult);
	}

	
	
	// @Test
	public void testEmptyPassword() {

	    	OrganicRegisterPage o = new OrganicRegisterPage();
	        assertFalse(o.CheckPassword("")); 
	    }

	 

	    
	 //@Test
	 public void testshortPassword() {
	    	
	    	OrganicRegisterPage o = new OrganicRegisterPage();

	    	String expectedpass = "dhanesh";
	    	boolean actualResult = o.CheckPassword(expectedpass);
	    	
	        assertFalse(o.CheckPassword("dhanesh123"));
	 }
	    

	  //@Test
	 void testAddress() {
		 
		OrganicRegisterPage o = new OrganicRegisterPage();
			
		String expectedAddress = "Chennai";
		String actualResult = o.YourAddress(expectedAddress);	
		
		assertSame(o.YourAddress(expectedAddress), actualResult,"Please Provide the Email");		
		assertEquals(o.YourAddress(expectedAddress), actualResult);
	}

	 
	 
	 
	//@Test
	 void testAddressint() {

		OrganicRegisterPage o = new OrganicRegisterPage();		
		
		String expectedAddress = "Chennai";	
		String actualResult = o.YourAddress(expectedAddress);
		
		assertFalse(o.CheckPassword("124456")); 
	}

	 
	 
	 
	@Test		
	 void testclickSubmit() {

		 OrganicRegisterPage o = new OrganicRegisterPage();

		String expectedname = "dhanesh";
		String expectedEmailID = "dhanesh@gmail.com";
		String expectedpass = "dhanesh123";
		String expectedAddress = "Chennai";

		boolean actualResult = o.submit(expectedname, expectedEmailID, expectedpass,expectedAddress);
		assertFalse(o.submit("", "", "", ""),"Please Provide the Required Fields");
	}
	
		
	OrganicRegisterPage t;
	TestInfo testInfo;
	TestReporter testReporter;

	@Test
	@Tag("testName")
	@Tag("testEmailId")
	@Tag("testContactNo")
	@Tag("testPassword")
	@Tag("testEmptyPassword")
	@Tag("testshortPassword")
	@Tag("testAddress")
	@Tag("testAddressint")
	@Tag("testclickSubmit")
	void init(TestInfo testInfo,TestReporter testReporter) {

		t = new OrganicRegisterPage();
		this.testInfo = testInfo;
		this.testReporter = testReporter;
		testReporter.publishEntry("Tested All OrganicRegisterPage Fields Success" + testInfo.getTags());		
	}		
}

