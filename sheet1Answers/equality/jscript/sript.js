function compareEquality()
{
    function person(name,age,sex)
        {
          this.name=name;
          this.age=age;
          this.sex=sex;
        }
        var businessMan=new person("Amit",26,"male");
        console.log(typeof(businessMan));
        var businessWomen=new person("umavati",25,"female");
        console.log(typeof(businessWomen));
        var result=0;
        result=equality(businessMan,businessWomen);
        document.getElementById("demo").innerHTML=result;
        var display=businessMan.name+" "+"is"+" "+businessMan.age+" "+"years old";
        console.log(display);
        document.getElementById("call").innerHTML=display;
}  function equality(businessMan,businessWomen)
  {
        if(businessMan==businessWomen)
        {
          result="object are same";
        }
        else {
          result="object are not same";
        }
        return result;
  }
