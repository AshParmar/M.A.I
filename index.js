
function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()
document.querySelectorAll("#page2 ul li").forEach(function(listItem) {
  let clutter = "";
  listItem.textContent.split("").forEach(function(dets) {
      if (dets.trim() === "") {
          // Preserve whitespace as span
          clutter += `<span>&nbsp;</span>`;
      } else {
          clutter += `<span>${dets}</span>`;
      }
  });
  listItem.innerHTML = clutter;
});

gsap.to("#page2 ul li span", {
  scrollTrigger: {
      trigger: "#page2 ul",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.1,
  },
  stagger: 0.002,
  color: "#fff"
});

var clutter = "";



document.querySelector("#page2>h3").textContent.split("").forEach(function(dets){
  clutter += `<span>${dets}</span>`

  document.querySelector("#page2>h3").innerHTML = clutter;
})

gsap.to("#page2>h3>span",{
scrollTrigger:{
    trigger:`#page2>h3>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
},
stagger:.002,
color:`#fff`
})



function canvas(){
  const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
  let data='';
  for (var i=1107;i<=1201;i++){
   data += `./Screenshot (${String(i)}).png\n`
  }

return data.split("\n")[index];
}

const frameCount = 95;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page3`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page3",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas()




document.querySelectorAll("#page4 ul li").forEach(function(listItem) {
  let clutter = "";
  listItem.textContent.split("").forEach(function(dets) {
      if (dets.trim() === "") {
          // Preserve whitespace as span
          clutter += `<span>&nbsp;</span>`;
      } else {
          clutter += `<span>${dets}</span>`;
      }
  });
  listItem.innerHTML = clutter;
});

gsap.to("#page4 ul li span", {
  scrollTrigger: {
      trigger: "#page4 ul",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.1,
  },
  stagger: 0.002,
  color: "#fff"
});

var clutter = "";



document.querySelector("#page4>h3").textContent.split("").forEach(function(dets){
  clutter += `<span>${dets}</span>`

  document.querySelector("#page4>h3").innerHTML = clutter;
})

gsap.to("#page4>h3>span",{
scrollTrigger:{
    trigger:`#page4>h3>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
},
stagger:.002,
color:`#fff`
})







function canvas1(){
const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
  let data='';
  for (var i=773;i<=844;i++){
   data += `./Screenshot (${String(i)}).png\n`
  }

return data.split("\n")[index];
}

const frameCount = 72;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
scrub: .5,
trigger: `#page5`,
start: `top top`,
end: `250% top`,
scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
img,
0,
0,
img.width,
img.height,
centerShift_x,
centerShift_y,
img.width * ratio,
img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()



document.querySelectorAll("#page6 ul li").forEach(function(listItem) {
  let clutter = "";
  listItem.textContent.split("").forEach(function(dets) {
      if (dets.trim() === "") {
          // Preserve whitespace as span
          clutter += `<span>&nbsp;</span>`;
      } else {
          clutter += `<span>${dets}</span>`;
      }
  });
  listItem.innerHTML = clutter;
});

gsap.to("#page6 ul li span", {
  scrollTrigger: {
      trigger: "#page6 ul",
      start: "top bottom",
      end: "bottom top",
      scroller: "#main",
      scrub: 0.1,
  },
  stagger: 0.002,
  color: "#fff"
});

var clutter = "";



document.querySelector("#page6>h3").textContent.split("").forEach(function(dets){
  clutter += `<span>${dets}</span>`

  document.querySelector("#page6>h3").innerHTML = clutter;
})

gsap.to("#page6>h3>span",{
scrollTrigger:{
    trigger:`#page6>h3>span`,
    start:`top bottom`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
},
stagger:.002,
color:`#fff`
})






function canvas2(){
const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});


  function files(index) {
    let data='';
    for (var i=1032;i<=1106;i++){
     data += `./Screenshot (${String(i)}).png\n`
    };
return data.split("\n")[index];
}

const frameCount = 75;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
scrub: .5,
trigger: `#page7`,
start: `top top`,
end: `250% top`,
scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
img,
0,
0,
img.width,
img.height,
centerShift_x,
centerShift_y,
img.width * ratio,
img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



// gsap.to(".page7-cir",{
// scrollTrigger:{
//   trigger:`.page7-cir`,
//   start:`top center`,
//   end:`bottom top`,
//   scroller:`#main`,
//   scrub:.5
// },
// scale:1.5
// })



gsap.to(".page7-cir-inner",{
scrollTrigger:{
  trigger:`.page7-cir-inner`,
  start:`top center`,
  end:`bottom top`,
  scroller:`#main`,
  scrub:.5
},
backgroundColor : `#0a3bce91`,
})