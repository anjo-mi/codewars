function caffeineBuzz(n){
  switch (true){
      case ( !(n % 4) && !(n % 3) ) : return 'CoffeeScript'; break;
      case ( !(n % 2) && !(n % 3) ) : return 'JavaScript'; break;
      case ( !(n % 3) ) : return 'Java'; break;
      default : return 'mocha_missing!'
  }
}