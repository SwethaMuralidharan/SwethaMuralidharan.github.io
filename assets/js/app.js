// sanity check
console.log("app.js linked.");
console.log("hi");
$(document).ready(function(){
var projects=[
  {
    name : "Memory Game",
    description: "Concentration, also known as Match Match, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.",
    project_url : "https://github.com/SwethaMuralidharan/wdi-fundamentals-memorygame",
    image_url:"https://github.com/SwethaMuralidharan/wdi-fundamentals-memorygame/blob/master/Screen%20Shot%202017-12-02%20at%208.46.44%20PM.png"
  },
  {
    name:"Routing in Mobile Adhoc Networks(Manet) with Route Hand-off and Balanced Load",
    description:"This Project was implemented in network simulator (ns-2.35) to improve Quality Of Service in Mobile Adhoc Networks by providing link stability among mobile nodes in the network by using channel characteristics and preemptive hand-off strategy.",
    project_url:"https://www.scribd.com/document/239301498/Routing-in-Manet-With-Route-Handoff-and-Balanced-Load",
    image_url:"http://slideplayer.com/slide/8519592/26/images/13/How+to+Utilize+Location+Information:+Observation+2+(+Route+Handover+).jpg"
  },
  {
    name : "Js Control Flow",
    description:"Javascript problem statements which control flow techniques",
    project_url:"https://github.com/SwethaMuralidharan/js-control-flow-training",
    image_url:"https://i.ytimg.com/vi/phXZVneg5ow/hqdefault.jpg"
  },
  {
    name: "Js Basics Problem Set",
    description:"Javascript basics Problem Set with logical approach.",
    project_url:"https://github.com/SwethaMuralidharan/problem-set-js-basics",
    image_url:"https://achievement-images.teamtreehouse.com/badges_JavaScript_Basics_Stage1.png"
  }
]

for(let i=0;i<projects.length;i++)
{
  $(".projects-container").append(`<div class="content-div">
    <h3 class="h3"> Project Title : ${projects[i].name} </h3> </br>
    <h4 class="h4"> Description: </h4>
    <h4 class-"h4_desc">${projects[i].description} </h4></br>
    <h4 class="a" >  <a href="${[projects[i].project_url]}">Click Here for Project</a> </h5> </br>
    <h4 class="a">  <a href= ${[projects[i].image_url]} > Screenshot Available Here! </a> </h5> </div>`);
}


});
