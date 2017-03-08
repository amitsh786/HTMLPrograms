var calculation=function()
                          {
                              return function(x)
                              {
                                  return function(y)
                                  {
                                      return x+y;
                                  }
                              }
                          }

              function sum()
              {
                var x= parseInt(document.getElementById("first").value);

                var y= parseInt(document.getElementById("second").value);
                console.log(y);
                var res1=calculation();
                var res2=res1(x);
                var res3=res2(y);
                console.log(res3);
                document.getElementById("result").value=res3;
            }
