window.addEventListener("load",()=>{
    let bored = document.querySelector('canvas')

    const ctx = bored.getContext("2d");

    bored.height = window.innerHeight;
    bored.width = window.innerWidth;
    //resizing
    window.addEventListener("resize",()=>{
    bored.height = window.innerHeight;
    bored.width = window.innerWidth;
    })
    

    

    let isPainting = false;

    bored.addEventListener('mouseup',()=>{
        isPainting = false;
        ctx.beginPath();
    })

    bored.addEventListener('mousedown',(e)=>{
        isPainting = true;
        if(!isPainting) return;
        ctx.lineWidth = 10;
        ctx.lineCap='round';
        ctx.lineTo(e.clientX,e.clientY);
        ctx.moveTo(e.clientX,e.clientY);
        ctx.stroke();
    })



    bored.addEventListener('mousemove',(e)=>{
        if(!isPainting) return;
        ctx.lineWidth = 10;
        ctx.lineCap='round';
        ctx.lineTo(e.clientX,e.clientY);
        ctx.moveTo(e.clientX,e.clientY);
        ctx.stroke();
    })
})