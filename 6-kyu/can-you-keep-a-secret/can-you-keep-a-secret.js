 
function createSecretHolder(secret) {
  const obj = {
    setSecret(secret){
      this.sec = secret;
    },
    getSecret(){
      return this.sec
    }
  };
  return obj
}