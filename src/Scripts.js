function runAnimations() {
    document.querySelector("#id-12").addEventListener("click", func_12_250);
  
    function func_12_250() {
      document.querySelector("#id-12").classList.add("animationClass-12");
      document.querySelector("#id-240").classList.add("animationClass-240");
      document.querySelector("#id-234").classList.add("animationClass-234");
      document
        .querySelector("#id-234 > div:first-child")
        .classList.add("bgClass-253");
      document.querySelector("#id-262").classList.add("nullAnimation-262");
      document
        .querySelector(".node-13-0")
        .classList.add("animationClass-13-13-0");
      document.querySelector("#id-13").classList.add("animationClass-13");
      document.querySelector("#id-12").removeEventListener("click", func_12_250);
  
      setTimeout(() => {
        document.querySelector("#id-12").classList.add("animationClass-250");
        document.querySelector("#id-234").classList.add("animationClass-253");
        document
          .querySelector("#id-234 > div:first-child")
          .classList.add("bgClass-257");
      }, 1100.000011920929);
  
      setTimeout(() => {
        document.querySelector("#id-12").classList.add("animationClass-254");
        document.querySelector("#id-240").classList.add("animationClass-256");
        document.querySelector("#id-234").classList.add("animationClass-257");
        document
          .querySelector("#id-234 > div:first-child")
          .classList.add("bgClass-261");
        document.querySelector("#id-262").classList.add("animationClass-null262");
        document
          .querySelector(".node-13-0")
          .classList.add("animationClass-255-255-0");
        document.querySelector("#id-13").classList.add("animationClass-255");
      }, 2200.000023841858);
    }
  }
  module.exports = runAnimations;
  
