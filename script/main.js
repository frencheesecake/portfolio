const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top:"+((e.pageY -scrollY))+"px; left: "+(e.pageX)+"px")
})
