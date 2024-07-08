package io.cal;

public class AmazonCreateAnAccountPage {
	
	public String YourName(String Firstnm, String Lastnm) {
		return ("Firstnm" + "Lastnm");
	}
	
	public String MobNoAndEmailID(long expectedNobNo, String EmailID) {
		return (expectedNobNo + "EmailID");
	}
	
	public boolean CheckPassword(String pass) {
		return pass.length() == 6;
	}
	
	public boolean ClickContinue(String name, String email, String password) {
		return true;
	}
	
	

}
