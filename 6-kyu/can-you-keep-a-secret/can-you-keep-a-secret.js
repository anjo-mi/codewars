 
function createSecretHolder(secret) {
  const obj = {
    sec: secret,
    setSecret(secret){
      this.sec = secret;
    },
    getSecret(){
      return this.sec
    }
  };
  return obj
}