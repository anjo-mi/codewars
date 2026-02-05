 
interface Count {
  static int countCharOccurrences(String s, char c) {
    int num = 0;
    for (char ch : s.toCharArray()){
      if (ch == c) num = num + 1;
    }
    return num;
  }
}