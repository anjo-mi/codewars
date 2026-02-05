    ends.put("3", "three");
    ends.put("4", "four");
    ends.put("5", "five");
    ends.put("6", "six");
    ends.put("7", "seven");
    ends.put("8", "eight");
    ends.put("9", "nine");
    ends.put("10", "ten");
    ends.put("11", "eleven");
    ends.put("12", "twelve");
    ends.put("13", "thirteen");
    ends.put("14", "fourteen");
    ends.put("15", "fifteen");
    ends.put("16", "sixteen");
    ends.put("17", "seventeen");
    ends.put("18", "eighteen");
    ends.put("19", "nineteen");
  }
  public static String nameThatNumber(int x) {
    String s = String.valueOf(x);
    if (x < 20 || s.length() == 1) return ends.get(s);
    String front = String.valueOf(s.charAt(0));
    String end = String.valueOf(s.charAt(1));
    if (end.equals("0")) return fronts.get(front);
    else return fronts.get(front) + ' ' + ends.get(end);
  }
}