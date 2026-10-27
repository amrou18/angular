<<<<<<< HEAD
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
=======
import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';
>>>>>>> b103470507732669cf9be8f27885f96e724464fe

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
<<<<<<< HEAD
  nom ="ons";
  imgurl="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1280px-Angular_gradient_logo.png?utm_source=fr.wikipedia.org&utm_campaign=index&utm_content=thumbnail"

  bonjour() {alert('Bonjour ');}


  nom1="amen"

  students=["Ahmed","Ali","Amine","Aymen","Anis"]
  students2=[
    {name:"Ahmed",age:20},
    {name:"Ali",age:21},
    {name:"Amine",age:22},
    {name:"Aymen",age:23},
    {name:"Anis",age:24}
  ]

//
count=0;
//signal
counts=signal(0);

incrementSimple(){
  this.count++;
}
///signal
increment() {
    this.counts.update(v => v + 1);
  }
}
=======
  nom ="amen";
  imgurl="https://www.google.com/search?sca_esv=10891fa1ffde4481&rlz=1C1KNTJ_frTN1089TN1089&sxsrf=APpeQnsbXCdfqstID-J3JDi-FCzB07lK-A:1790072741972&udm=2&fbs=ABfTbFVyMZGZf1hfvX9uKjN_-G8c4u0nXx4bEIpwm1lnNH832a9BVCEiB2iPJNekNderQwIgLtPdGtXl-1ukUntONsOMkLK8Wjg5QbsFQsyTdBlDyIWYhgxyDNTy0wPRmWscMhXPcoRl2IGiedJq-Ou7bktAThMu4NA9p70Yhev5koDcBW5-E_NLUvu30_BOJKw7r_p9-3Y2&q=image+angular&sa=X&ved=2ahUKEwiPx6DP_IGXAxXj9rsIHX9nAMoQtKgLegQIGhAB&biw=1536&bih=730&dpr=1.25#sv=CAMSURoyKhBlLTJyMDlfNm40dlpEeUtNMg4ycjA5XzZuNHZaRHlLTToOU2Q3MzU1SEVickZBVE0gBCoXCgFzEhBlLTJyMDlfNm40dlpEeUtNGAEwARgHINC1lscGSggQARgBIAEoAQ"
  bonjour(){
    alert("bonjour");
  }

  students=["ahmed","moez","aziz","amen"]
  students2=[
    {name:"ahmed",age:20},
    {name:"moez",age:21},
    {name:"aziz",age:22},
    {name:"amen",age:23}
  ]

  count=0;
  //signal
  counts = signal(0);
  //increment simple
  increment(){
    this.count++;
  }
//increment signal
  increment_signal(){
    this.counts.update(v => v + 1);
  }
}

>>>>>>> b103470507732669cf9be8f27885f96e724464fe
