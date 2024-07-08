package io.cal;

import static org.junit.Assume.assumeTrue;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledOnOs;
import org.junit.jupiter.api.condition.OS;

class ContitionalAssumptionTest {

	@Test
	@EnabledOnOs(OS.LINUX)
	void testOperartingSys() {
		System.out.println("I am using windows 10");
	}
	
	void testValue() {
		ConditionalAssumption c1 = new ConditionalAssumption();
		
		boolean val = false;
		assumeTrue(val);
		int expected = 10;
		int actual = c1.value();
		assertEquals(expected, actual);
	}
	
	@Test
	@DisplayName("Multiply method")
	void testMultiply() {
		ConditionalAssumption c1 = new ConditionalAssumption();
		
		assertAll(
				() -> assertEquals(4, c1.multiply(2, 2)),
				() -> assertEquals(0, c1.multiply(2, 0)),
				() -> assertEquals(-2, c1.multiply(2, -1))
				);
	}

}
