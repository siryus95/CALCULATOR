let a, b, c, d, e, f;
a=window.prompt("enter the first digit");
b=window.prompt("enter the second digit");
a=parseFloat(a);
b=parseFloat(b);
c=a*b;
d=a+b;
e=a-b;
f=a/b;

alert("Your operation is: "+a+"*"+b+ "="+ c);
alert("Your operation is: "+a+"+"+b+ "="+ d);
alert("Your operation is: "+a+"-"+b+ "="+ e);
alert("Your operation is: "+a+"/"+b+ "="+ f);