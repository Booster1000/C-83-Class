      canvas = document.getElementById('mycanvas');
      ctx = canvas.getContext("2d");
      
      color = "white";
      width_of_line = 5;
      bcolor="black";
      
      canvas.addEventListener("touchstart", my_touchstart);
      
      function my_touchstart(e)
      {
          //Addictonal Activity start
          color = document.getElementById("Color").value;
          width_of_line = document.getElementById("line").value;
          bcolor=document.getElementById("BgColor").value;
          document.getElementById("mycanvas").style.backgroundColor=bcolor;
          //Addictonal Activity ends
          last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
          last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
      }
  
      canvas.addEventListener("touchmove", my_touchmove);
      function my_touchmove(e)
      {
          current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
          current_position_of_mouse_y = e.touches[0].clientY  - canvas.offsetTop;
  
         
          ctx.beginPath();
          ctx.strokeStyle = color;
          ctx.lineWidth = width_of_line;
  
          
          last_position_of_x = current_position_of_mouse_x; 
          last_position_of_y = current_position_of_mouse_y;
      }  
  
  //Additional Activity
  function clearArea() {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }