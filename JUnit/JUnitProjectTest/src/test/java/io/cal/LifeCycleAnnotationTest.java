package io.cal;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class LifeCycleAnnotationTest {

	LifeCycleAnnotation m;
	
//	@BeforeAll
//	static void beforeAll() {
//		
//	}
//
//	@AfterAll
//	static void afterAll() {
//		
//	}
//	
//	@BeforeEach
//	void init() {
//		m = new LifeCycleAnnotation();
//	}
//	
//	@AfterEach
//	void cleanUp() {
//		System.out.println("Clean up Now");
//	}
//	
//	@Test
//	void testsquare() {
//		int expected = 25;
//		int actual = m.square(5);
//		assertEquals(expected, actual, "Pass");
//	}
//	
//	@Test
//	void testcube() {
//		int expected = 125;
//		int actual = m.cube(5);
//		assertEquals(expected, actual, "Pass");
//	}
//	
	@Nested
	class TestPositiveNumber{
		
		@BeforeEach
		void init() {
			m = new LifeCycleAnnotation();
		}
		
		@Test
		void testPostiveNo() {
			assertEquals(2 ,m.positive(2, -2), () -> "Should return a +ve value");
		}
		
		@Test
		void testNegativeNo() {
			assertEquals(-2 ,m.positive(-2, -2), () -> "Should return a -ve value");
		}
	}
	
	
	
	
	
	
	
}
