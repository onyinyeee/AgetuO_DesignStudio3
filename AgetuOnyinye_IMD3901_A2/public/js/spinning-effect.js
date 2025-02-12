'use strict';

//this component will basically just toggle off/on the spinning of the walls
AFRAME.registerComponent('create', {
  schema: {
    duration: {type: 'number', default:20000.0},  //duration is in milliseconds
  },
  multiple: false, //do not allow multiple instances of this component on this entity
  init: function() {
    
    //get a local reference to our entities and set some property variables
    const Context_AF = this;
    Context_AF.fire      = document.querySelector('#fire_model');
    Context_AF.isSpinning = false;
    
    //let's add the basic animation to teh walls entity
    //note that it is not enabled initially
    Context_AF.walls.setAttribute('animation', {property:'visible', to:false, loop:true, dur:Context_AF.data.duration, easing:'linear', enabled:false});
    
    //listen on click
    Context_AF.el.addEventListener('click', function() {
      if (Context_AF.isSpinning === true) {
        console.log('stop spinning');
        Context_AF.fire.setAttribute('animation', {enabled:false});
        Context_AF.isSpinning = false;
      }
      else {
        console.log('spinning');
        Context_AF.fire.setAttribute('animation', {enabled:true});
        Context_AF.isSpinning = true;
      }
    });
  },
  
  //component documentation: https://github.com/aframevr/aframe/blob/master/docs/core/component.md
  
  // update: function (oldData) {},
  // tick: function(time, timeDelta) {},
  // tock: function(time, timeDelta) {},
  // remove: function() {},
  // pause: function() {},
  // play: function() {},
  // updateScheme: function(data) {}
});
