// document.addEventListener("DOMContentLoaded",e=>{
//     const keys = document.querySelectorAll(".key");
//     const synth = new Tone.PolySynth(Tone.Synth).toDestination();
//     const shift = 16;
//     keys.forEach(el => {
//         el.addEventListener("click",async() =>{
//             await Tone.start();
//             const chord = el.getAttribute("data-chord").split(",")
//             synth.triggerAttackRelease(chord,1,"4n");
            
//             // console.log("hi");
//         keys.forEach(btn=>btn.removeAttribute("id"));
//             el.id = "playing";
//             setTimeout(()=>{
//                 el.removeAttribute("id");
//             },1500);
//         });
//     });
//     document.addEventListener("keydown",(e)=>{
//         const actualkeyvalue = e.getAttribute(data-type);
//         const pressedkey = e.key.toLowerCase();
//         const cass = document.querySelector(`[data-value="${pressedkey}"]`);
//         if(e.shiftKey===true){
            
//              const playkey = cass+shift;
//              if(actualkeyvalue== playkey){
//                 console.log("H/I");
//              }

//         }else{
//              console.log("low");
//             // const playkey= cass;
//             // // if(e.getAttribute("data-type")== cass){
//             // if(cass){
//             //     console.log("low");
//             // }
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const keys = document.querySelectorAll(".key");
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();

    // Click handler
    keys.forEach(el => {
        el.addEventListener("click", async () => {
            await Tone.start();
            const chord = el.getAttribute("data-chord").split(",");
            synth.triggerAttackRelease(chord, 1, "4n");

            keys.forEach(btn => btn.removeAttribute("id"));
            el.id = "playing";
            setTimeout(() => {
                el.removeAttribute("id");
            }, 1500);
        });
    });

    // Keydown handler
    document.addEventListener("keydown", async (e) => {
        const pressedKeyCode = e.key.toLowerCase().charCodeAt(0); // Get key code of pressed key

        keys.forEach(async el => {
            const keyCode = parseInt(el.getAttribute("data-type"));

            if (e.shiftKey && keyCode === pressedKeyCode) {
                // Play MAJOR chord
                await Tone.start();
                const chord = el.getAttribute("data-chord").split(",");
                synth.triggerAttackRelease(chord, 1, "4n");

                el.id = "playing";
                setTimeout(() => el.removeAttribute("id"), 1500);
            } else if (!e.shiftKey && keyCode === pressedKeyCode-32) {
                // Play MINOR chord
                await Tone.start();
                const chord = el.getAttribute("data-chord").split(",");
                synth.triggerAttackRelease(chord, 1, "4n");

                el.id = "playing";
                setTimeout(() => el.removeAttribute("id"), 1500);
            }
        });
    });
});