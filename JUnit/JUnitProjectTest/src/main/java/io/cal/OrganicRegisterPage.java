package io.cal;


import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInfo;
import org.junit.jupiter.api.TestReporter;

public class OrganicRegisterPage {

		

	public String UserName(String Name) {
		return("Name");

	}

		

	public String EmailId(String EmailID) {
		return("EmailID");

	}

	public Long ContactNo(Long ConNumber) {
		return(ConNumber);
	}

		

	public boolean CheckPassword(String pass) {
		return pass.length() <= 6;
	}

	public String YourAddress(String address) {
		return("address");
	}

		

	public boolean submit(String name,String email,String password,String address) {
		return true;
	}	
	
	
} 



