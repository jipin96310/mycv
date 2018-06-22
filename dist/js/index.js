window.onload = function () {

  var canvas,
    ctx,
    state,
    now,
    interval = 1000 / 60,
    then = Date.now(),
    delta,
    flag = 0,
    increment = 1,
    timer;

  init();

  function randomXPos() {
    return Math.floor(Math.random() * (canvas.width + 400)) - 200;
  }

  function randomYPos() {
    return Math.floor(Math.random() * (canvas.height + 400)) - 200;
  }

  function randomFullness() {
    return Math.ceil(Math.random() * 260);
  }

  function randomColor() {
    return 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.random() * 1 + ')';
  }

  function init() {

    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    state = {
      circles: []
    };

  }

  function render() {




    timer =  requestAnimationFrame(render);
    
     

    now = Date.now();
    delta = now - then;

    if (delta > interval) {

      then = now - (delta % interval);

      // Clear the canvas with each redraw - or don't, for this paintbrush effect!
      // ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < state.circles.length; i++) {
        var lf = state.circles[i],
          newDirection = false,
          changeFullness = true;

        var shadowColor = lf.color.split(',');
        shadowColor = shadowColor[0] + ',' + shadowColor[1] + ',' + shadowColor[2] + ',' + '0.15)';

        ctx.beginPath();
        ctx.strokeStyle = lf.strokeColor;
        ctx.lineWidth = 1;
        ctx.fillStyle = lf.color;
        ctx.shadowBlur = 30;
        ctx.shadowColor = shadowColor;

        ctx.arc(
          lf.x,
          lf.y,
          lf.fullness,
          0,
          2 * Math.PI
        );

        ctx.fill();
        // ctx.stroke();

        if (lf.newX > lf.x) {
          lf.x += increment;
        } else if (lf.newX < lf.x) {
          lf.x -= increment;
        } else {
          newDirection = true;
        }

        if (lf.newY > lf.y) {
          lf.y += increment;
        } else if (lf.newY < lf.y) {
          lf.y -= increment;
        } else {
          newDirection = true;
        }

        if (lf.newFullness > lf.fullness) {
          lf.fullness += 0.125;
          changeFullness = false;
        }

        if (lf.newFullness < lf.fullness) {
          lf.fullness -= 0.125;
          changeFullness = false;
        }

        if (changeFullness) {
          lf.newFullness = randomFullness();
        }

        if (newDirection) {

          lf.newX = randomXPos();
          lf.newY = randomYPos();
        }
      }
    }



  }





  function createCircle() {


    state.circles.push({
      x: randomXPos(),
      y: randomYPos(),
      fullness: 0,
      newX: randomXPos(),
      newY: randomYPos(),
      newFullness: randomFullness(),
      color: randomColor(),
      strokeColor: randomColor()
    });



  }

  //var intervalcreate = this.setInterval(createCircle,300)

    createCircle()
    render();
    setTimeout(
      () => {
      
        let id = requestAnimationFrame(render);
        console.log(id +"++"+timer)
        console.log(id-1)
        cancelAnimationFrame(id);
     
  
  
  
      },
      500
    );
 
 
  //draw();

 



}