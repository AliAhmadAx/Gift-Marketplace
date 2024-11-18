const isName = (name) => {
    let regex = /^[a-zA-Z ]{2,30}$/;
  
    return regex.test(name);
  };
  const isUserName = (username) => {
    let regex = /^[a-z0-9_-]{3,15}$/;
    let regexTwo = /[A-Za-z]/i;
  
    return regex.test(username);
  };
  const isEmpty = (string) => {
    let regex = /^\s+$/;
  
    return regex.test(string) || string === "";
  };
  const isEmail = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex2 = /^[0-9]/;
    console.log(regex.test(email), regex2.test(email), email, "asd");
    return regex.test(email) && !regex2.test(email);
  };
  function validatePassword(password) {
    // At least one lowercase letter, one uppercase letter, one digit, and one special character
    var pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/;
  
    return pattern.test(password);
  }
  const Validations = {
    isName,
    isUserName,
    isEmpty,
    isEmail,
    validatePassword,
  };
  export default Validations;
  