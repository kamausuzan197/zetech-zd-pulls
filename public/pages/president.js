const form = document.querySelector("#aspirants")

//form event
form.addEventListener('submit', (e) =>{
  //when you click this button it responds by getting the data and initializing it as instructed 
    const choice = document.querySelector("input[name = zt]:checked").value
    const data = {zt:choice}

    fetch("http://localhost:3000/pages/president", {
        method:'post',
        body:JSON.stringify(data),
        Headers:new Headers({
            'content-type':'application/json'
        })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
//e.is a function to desplay the defaul are of the page
    e.preventDefault()
})
//chart
let dataPoints = [
  { label: 'John', y: 0},
  { label: 'Peter', y: 0},
  { label: 'David', y: 0},
  { label: 'Mercy', y: 0},
]

const chartContiner = document.querySelector("#chartContainer")

if(chartContiner){
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled:true,
    theme:'theme1',
    title:{
      text:'Zetech Polls'
    },
    data:[
      {
        type:'column',
        dataPoints:dataPoints
      }
    ]
  })
  chart.render()
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('5eebcaa203111be8fb46', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('zt-poll');
    channel.bind('zt-vote', function(data) {
      dataPoints = dataPoints.map(x =>{
        if(x.label == data.zt){
          x.y+= data.points
          return x
        } else {
          return x
        }
      })
      chart.render()
    })
}
//humberger
const menuBtn = document.querySelector(".humbuger")
const mobileNav = document.querySelector(".mobile-nav")

menuBtn.addEventListener('click', ()=>{
  menuBtn.classList.toggle("is-active")
  mobileNav.classList.toggle("is-active")
})

