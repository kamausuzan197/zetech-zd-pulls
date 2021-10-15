const form = document.querySelector("#aspirants")

form.addEventListener("submit", (e) =>{
    const choice = document.querySelector("input[name = zt]:cheked").value
    const data = {zt:choice}

    fetch("http://localhost:3001/index.html", {
        method:"post",
        body:JSON.stringify(data),
        headers: new Headers({
            "content-type":"application/json"
        })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

      e.preventDefault()
})
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
  }