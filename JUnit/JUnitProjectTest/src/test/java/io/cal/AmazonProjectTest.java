package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class AmazonProjectTest {

	@Test
	void testAmazonTagLine() {
		String expected = "Spend less, Smile more";
		String actual ="Spend less, Smile more";
		
		assertEquals(expected, actual);
		assertSame(expected, actual, "Expexted result should match the actual result");
	}

}
