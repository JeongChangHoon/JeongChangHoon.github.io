function validate() {
    const objID = document.getElementById("my_id");
    const objPwd1 = document.getElementById("my_pwd");
    const objPwd2 = document.getElementById("my_pwd2");
    const objEmail = document.getElementById("my_mail");
    const objName = document.getElementById("my_name");
    const objPnum = document.getElementById("my_pnumber");

    const regul1 = /^[a-zA-Z0-9]{4,12}$/;
    const regul2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    const regul3 = /^[가-힝a-zA-Z]{2,}$/;
    
    if ((objID.value) == ""){
        alert("아이디를 입력하지 않았습니다.");
        objID.focus();
        return false;
    }
   
    if (!check(regul1,objID,"아이디는 4~12자의 대소문자와 숫자로만 입력 가능합니다.")) {
        return false;
    }
        
    if ((objPnum.value) == ""){
        alert("전화번호를 입력하지 않았습니다.");
        objID.focus();
        return false;
    }
        
    if ((objPwd1.value) == ""){
        alert("비밀번호를 입력해 주세요");
        objPwd1.focus();
        return false;
    }
    if ((objPwd2.value=="")){
        alert("비밀번호를 입력해 주세요");
        objPwd2.focus();
        return false;
    }                
    
    if (!check(regul1,objPwd1,"비밀번호는 4~12자의 대소문자와 숫자로만 입력 가능합니다.")) {
        return false;
    }                            
        
    if ((objPwd1.value)!=(objPwd2.value)) {
        alert("비밀번호가 일치 하지 않습니다.");
        objPwd1.focus();
        objPwd2.focus();
        return false;
    }
        
    if ((objEmail.value)=="") {
        alert("이메일을 입력해 주세요");
        objEmail.focus();
        return false;
    }
        
    if (!check(regul2,objEmail,"이메일을 잘못 입력 했습니다.")) {
        return false;
    }
        
    if ((objName.value)=="") {
        alert("이름을 입력해 주세요");
        objName.focus();
        return false;
    }
        
    if (!check(regul3,objName,"이름이 잘못 되었습니다.")) {
        return false;
    }                   
    
    function inputPhoneNumber(obj) {
        var number = obj.value.replace(/[^0-9]/g, "");
        var phone = "";
        if(number.length < 4) {
            return number;
        } else if(number.length < 7) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3);
        } else if(number.length < 11) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 3);
            phone += "-";
            phone += number.substr(6);
        } else {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 4);
            phone += "-";
            phone += number.substr(7);
        }
        obj.value = phone;
    }              

    function check(re,what,message){
        if (re.test(what.value)) {
            return true;
        }
        alert(message);
        what.value = "";
        what.focus();
    }
}