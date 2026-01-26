 const fills = document.querySelectorAll(".fill");
    fills.forEach(bar => {
      let width = parseInt(bar.style.width);
      setInterval(() => {
        let random = (Math.random() * 10 - 5); // variación aleatoria
        width = Math.min(100, Math.max(0, width + random));
        bar.style.width = width + "%";
      }, 2000);
    });