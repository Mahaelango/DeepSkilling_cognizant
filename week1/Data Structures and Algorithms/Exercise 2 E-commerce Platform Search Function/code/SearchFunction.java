package dsa.algorithm;

import java.util.Arrays;
import java.util.Comparator;

public class SearchFunction {

 // Linear Search
 public static Product linearSearch(Product[] products, String targetName) {
     for (Product p : products) {
         if (p.productName.equalsIgnoreCase(targetName)) {
             return p;
         }
     }
     return null;
 }

 // Binary Search (Assumes sorted array by productName)
 public static Product binarySearch(Product[] products, String targetName) {
     int left = 0, right = products.length - 1;
     while (left <= right) {
         int mid = (left + right) / 2;
         int cmp = products[mid].productName.compareToIgnoreCase(targetName);
         if (cmp == 0) return products[mid];
         else if (cmp < 0) left = mid + 1;
         else right = mid - 1;
     }
     return null;
 }

 public static void main(String[] args) {
     Product[] products = {
         new Product(1, "Laptop", "Electronics"),
         new Product(2, "Shoes", "Fashion"),
         new Product(3, "Mobile", "Electronics"),
         new Product(4, "Watch", "Accessories"),
         new Product(5, "Camera", "Electronics")
     };

     // Linear Search
     Product result1 = linearSearch(products, "Mobile");
     System.out.println("Linear Search Result: " + result1);

     // Sort for Binary Search
     Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

     // Binary Search
     Product result2 = binarySearch(products, "Mobile");
     System.out.println("Binary Search Result: " + result2);
 }
}
