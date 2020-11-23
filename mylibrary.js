function bounceOff(o1,o2){
    if(o1.y-o2.y<o2.height/2+o1.height/2
       &&o2.y-o1.y<o2.height/2+o1.height/2){
      o1.velocityY=-3;
      o2.velocityY=3;
    }
  }