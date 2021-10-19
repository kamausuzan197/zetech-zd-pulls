window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {

      title:{
        text: "Zetech Polls"              
      },
      data: [
         {type: "column",
         dataPoints: [
         { label: "person1", y: 18 },
         { label: "person2", y: 29 },
         { label: "person3", y: 40 },                                    
         { label: "person4", y: 34 },
         ]
       }
       ]
     });

    chart.render();
    //humberger menu
    const menuBtn = document.querySelector(".humbuger")
    const mobileNav = document.querySelector(".mobile-nav")
    menuBtn.addEventListener('click', ()=>{
      menuBtn.classList.toggle("is-active")
      mobileNav.classList.toggle("is-active")
    })
  }


  
  