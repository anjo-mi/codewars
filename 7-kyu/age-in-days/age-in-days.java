 
import java.time.temporal.ChronoUnit;
import java.time.LocalDate;
​
public class Kata {
  public static String ageInDays(int year, int month, int day) {
    LocalDate then = LocalDate.of(year,month,day);
    LocalDate now = LocalDate.now();
    long daysBetween = ChronoUnit.DAYS.between(then,now);
    return String.format("You are %s days old",daysBetween);
  }
}
​