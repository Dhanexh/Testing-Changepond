package io.cal;

public class LifeCycleAnnotation {
	
	public int square(int a) {
		return a*a;
	}
	
	
	public int cube(int a) {
		return a*a*a;
	}
	
	
	public int positive(int x, int y) {
		if(x > 0) {
			return x;
		}else {
			return y;
		}
	}

}
