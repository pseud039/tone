document.addEventListener("DOMContentLoaded",e=>{
    const keys = document.querySelectorAll(".key");
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    keys.forEach(el => {
        el.addEventListener("click",async() =>{
            await Tone.start();
            const chord = el.getAttribute("data-chord").split(",")
            synth.triggerAttackRelease(chord,1,"4n");
            
            // console.log("hi");
        keys.forEach(btn=>btn.removeAttribute("id"));
            el.id = "playing";
            setTimeout(()=>{
                el.removeAttribute("id");
            },1500);
        });
    });

});