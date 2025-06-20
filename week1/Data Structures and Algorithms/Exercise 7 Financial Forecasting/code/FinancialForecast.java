package Finacial;

public class FinancialForecast {

//Step 2 : Setup : Create a method to calculate the future value using a recursive approach.
    public static double futureValue(double presentValue, double rate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return futureValue(presentValue * (1 + rate), rate, years - 1);
    }
//Step 3 : Implementing  the above  method in main method
    public static void main(String[] args) {
        double presentValue = 10000.0; // ₹10,000
        double rate = 0.08; // 8% growth
        int years = 5;

        double result = futureValue(presentValue, rate, years);
        System.out.printf("Future Value after %d years: ₹%.2f\n", years, result);
    }
}
