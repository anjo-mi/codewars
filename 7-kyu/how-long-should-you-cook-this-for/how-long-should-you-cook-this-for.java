public class CookingTime
{
  public static String getTime(String needs, int min, int sec, String pow)
   {
     double has = Double.parseDouble(pow.substring(0,pow.length()-1));
     double need = Double.parseDouble(needs.substring(0,needs.length()-1));
     double convert = need / has;
     int totalSeconds = (min * 60) + sec;
     double adjustedSeconds = Math.ceil(totalSeconds * convert);
     int adjustMinutes = (int) Math.floor(adjustedSeconds / 60);
     int adjustSeconds = (int) adjustedSeconds % 60;
     return adjustMinutes + " minutes " + adjustSeconds + " seconds";
   }
}
​