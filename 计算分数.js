window.onload = function(){
    document.getElementById("button").click = function(){
        scoring()
    }
}

let TP = 0 //total points=TP;
function scoring()
{
    ex1() //填空题
    ex2() //选择题
    ex3() //多择题
    ex4() //判断题
    ex5() //简答题
    document.getElementById("TP").innerHTML = "得分："+TP.toString();
}

function ex1()
{
    let answers = ["统一建模语言","封装性","多态性","继承性"];
    let blanks = document.getElementsByName("ex1");
    for(let i =0;i<blanks.length;i++)
    for(let i =0;i<answers.length;i++)
    {
        if(answers[i]===blanks[i])
        {
            TP+=5;
        }
    }
}

function ex2()
{
    let ex2one = document.getElementsByName("ex2.1");
    if(ex2one[1].checked)
    {
        TP+=10;
    }
    let ex2two = document.getElementsByName("ex2.2");
    if(ex2two[0].checked)
    {
        TP+=10;
    }
}

function ex3()
{
    let ex3one = document.getElementsByName("ex3.1");
    if((ex3one[0].checked) && (ex3one[1].checked) &&(ex3one[2].checked===false) && (ex3one[3].checked))
    {
        TP+=10;
    }
    let ex3two = document.getElementsByName("ex3.2");
    if((ex3two[0].checked) && (ex3two[1].checked) && (ex3two[2].checked) && (ex3two[3].checked===false))
    {
        TP+=10;
    }
}

function ex4()
{
    let ex4one = document.getElementsByName("ex4.1");
    if(ex4one[1].checked)
    {
        TP+=10;
    }
    let ex4two = document.getElementsByName("ex4.2");
    if(ex4two[0].checked)
    {
        TP+=10;
    }
}

function ex5()
{
    let answer = document.getElementByName("ex5").value;
    if(answer==="模型是对现实世界的简化和抽象,模型是对所研究的系统,过程,事物或概念的一种表达形式.可以是物理实体;可以是某种图形;或者是一种数学表达式.")
    {
        TP+=20;
    }
}
