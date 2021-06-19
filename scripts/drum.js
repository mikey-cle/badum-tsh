
// check for q key press and output sound
document.addEventListener("keydown", function(x){
if(x.keyCode == 81){
   document.getElementById('soundBoom').pause();
   document.getElementById('soundBoom').currentTime = 0;
   document.getElementById('soundBoom').play();
  }
})
// check for w key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 87){
       document.getElementById('soundClap').pause();
       document.getElementById('soundClap').currentTime = 0;
       document.getElementById('soundClap').play();
      }
    })
// check for e key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 69){
        document.getElementById('soundHiHat').pause();
        document.getElementById('soundHiHat').currentTime = 0;
        document.getElementById('soundHiHat').play();
        }
        })
 // check for r key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 82){
        document.getElementById('soundKick').pause();
        document.getElementById('soundKick').currentTime = 0;
        document.getElementById('soundKick').play();
        }
        })
// check for t key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 84){
        document.getElementById('soundOpenHat').pause();
        document.getElementById('soundOpenHat').currentTime = 0;
        document.getElementById('soundOpenHat').play();
        }
        })
// check for y key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 89){
        document.getElementById('soundRide').pause();
        document.getElementById('soundRide').currentTime = 0;
        document.getElementById('soundRide').play();
        }
        })
// check for s key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 83){
        document.getElementById('soundSnare').pause();
        document.getElementById('soundSnare').currentTime = 0;
        document.getElementById('soundSnare').play();
        }
        })
// check for d key press and output sound
document.addEventListener("keydown", function(x){
    if(x.keyCode == 68){
        document.getElementById('soundTink').pause();
        document.getElementById('soundTink').currentTime = 0;
        document.getElementById('soundTink').play();
        }
        })
// check for f key press and output sound
document.addEventListener("keydown", function(x){
if(x.keyCode == 70){
    document.getElementById('soundTom').pause();
    document.getElementById('soundTom').currentTime = 0;
    document.getElementById('soundTom').play();
}})
// on click events
const boomBtn = document.getElementById('boom');
boomBtn.addEventListener("click", function(x){
document.getElementById('soundBoom').pause();
document.getElementById('soundBoom').currentTime = 0;
document.getElementById('soundBoom').play()
})
const clapBtn = document.getElementById('clap');
clapBtn.addEventListener("click", function(x){
document.getElementById('soundClap').pause();
document.getElementById('soundClap').currentTime = 0;
document.getElementById('soundClap').play()
})
const hiHatBtn = document.getElementById('kick');
hiHatBtn.addEventListener("click", function(x){
document.getElementById('soundHiHat').pause();
document.getElementById('soundHiHat').currentTime = 0;
document.getElementById('soundHiHat').play()
})
const openHatBtn = document.getElementById('openHat');
openHatBtn.addEventListener("click", function(x){
document.getElementById('soundOpenHat').pause();
document.getElementById('soundOpenHat').currentTime = 0;
document.getElementById('soundOpenHat').play()
})
const rideBtn = document.getElementById('ride');
rideBtn.addEventListener("click", function(x){
document.getElementById('soundRide').pause();
document.getElementById('soundRide').currentTime = 0;
document.getElementById('soundRide').play()
})
const snareBtn = document.getElementById('snare');
snareBtn.addEventListener("click", function(x){
document.getElementById('soundSnare').pause();
document.getElementById('soundSnare').currentTime = 0;
document.getElementById('soundSnare').play()
})
const tinkBtn = document.getElementById('tink');
tinkBtn.addEventListener("click", function(x){
document.getElementById('soundTink').pause();
document.getElementById('soundTink').currentTime = 0;
document.getElementById('soundTink').play()
})
const tomBtn = document.getElementById('tom');
tomBtn.addEventListener("click", function(x){
document.getElementById('soundTom').pause();
document.getElementById('soundTom').currentTime = 0;
document.getElementById('soundTom').play();
})
const hatBtn = document.getElementById('hiHat');
hatBtn.addEventListener("click", function(x){
document.getElementById('soundHiHat').pause();
document.getElementById('soundHiHat').currentTime = 0;
document.getElementById('soundHiHat').play()
console.log("success");
})
