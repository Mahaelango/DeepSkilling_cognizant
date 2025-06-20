package singleton;

public class Logger {
		    //Private static instance of Logger
		    private static Logger instance;

		    //Private constructor to prevent instantiation
		    private Logger() {
		        System.out.println("Logger instance created.");
		    }

		    // Public static method to return the single instance
		    public static Logger getInstance() {
		        if (instance == null) {
		            instance = new Logger();
		        }
		        return instance;
		    }

		    // Sample logging method
		    public void log(String message) {
		        System.out.println("Log: " + message);
	        }
}

