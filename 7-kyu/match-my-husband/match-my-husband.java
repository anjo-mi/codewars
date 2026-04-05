import java.util.Arrays;
​
public class Solution {
  public static String match(int[] uses, int ms) {
    float threshold = 100;
    while (ms > 0){
      threshold = threshold * .85f;
      ms -= 1;
    }
    float score = Arrays.stream(uses).reduce(0, (total,sc) -> total + sc);
    if (score >= threshold){
      return "Match!";
    }else return "No match!";
  }
}