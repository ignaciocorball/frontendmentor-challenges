/*
    script.js made by Ignacio Corball 2022
*/

// ============================================
// All App Functions
// v2.0.0
// ============================================
function cardselect(id) {
  //let card_front_id = document.querySelector("#"+id);
  const card_front_id = document.getElementById(id);
  console.log('Task id: ' + id + ' was selected');
  if (!card_front_id.querySelector('.card__side--front').querySelector('.task-tittle').classList.contains("tittle-tashed")) {
    if (card_front_id != null) {
      // Flip card
      card_front_id.querySelector('.card__side--front').style.transform = "rotateY(-180deg)";
      card_front_id.querySelector('.card__side--back').style.transform = "rotateY(0deg)";
      // Load 5 seconds to undo changes
      var counter = card_front_id.querySelector('.card__side--back').querySelector('.card-timeout').style.width;
      var counter = counter.replace("%", "");
      let interval = window.setInterval(function () {
        if (counter < 92) {
          card_front_id.querySelector('.card__side--back').querySelector('.card-timeout').style.width = (++counter) + '%';
          counter++;
        }
        else {
          // Change status of task
          card_front_id.querySelector('.card__side--front').style.transform = "rotateY(0deg)";
          card_front_id.querySelector('.card__side--back').style.transform = "rotateY(-180deg)";
          card_front_id.querySelector('.card__side--front').querySelector('.task-tittle').className = "task-tittle tittle-tashed";
          card_front_id.querySelector('.card__side--front').querySelector('.fa-circle-check').className = "fas fa-circle-check chk-checked";
          console.log('Task completed!');
          clearInterval(interval);
        }
      }, 55);
    } else {
      console.log('Task doesn\'t match');
    }
  } else {
    console.log('Task is already completed');
  }
}


/***************************************
  START Function: Move slider
***************************************/
let slider = document.querySelector(".slider");
let innerSlider = document.querySelector(".slider-inner");
var cards = document.querySelector(".item");
let pressed = false;
let startx;
let x;

slider.addEventListener("mousedown", (e) => {
  pressed = true;
  startx = e.offsetX - innerSlider.offsetLeft;
});
window.addEventListener("mouseup", () => {
  pressed = false;
});
slider.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!pressed) return;
  x = e.offsetX;
  innerSlider.style.left = `${x - startx}px`;
  checkBoundary();
});

function checkBoundary() {
  let outer = slider.getBoundingClientRect();
  let inner = innerSlider.getBoundingClientRect();
  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = "0px";
  } else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}
checkBoundary();

// ============================================
// Function: Start ChartJS
// Chart.js Version: 2.5.0
// ============================================
var chart = document.getElementById('chart').getContext('2d'), 
gradient = chart.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, 'rgba(216, 223, 247, 0.6)');
gradient.addColorStop(0.5, '#D8DFF7');
var data = {
  labels: ['March 11', 'March 12', 'March 13', 'March 14', 'March 15', 'March 16', 'March 17', 'March 18', 'March 19'],
  datasets: [{
    backgroundColor: gradient,
    pointBackgroundColor: 'white',
    borderColor: gradient,
    borderWidth: 5,
    data: [10, 15, 12, 18, 17, 26, 24, 26, 30]
  }]
};
var options = {
  responsive: true,
  animation: {
    easing: 'easeInOutQuad',
    duration: 520
  },
  plugins: {
    legend: false, // Hide legend
    tooltip: {
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || '';

          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += " " + context.parsed.y + " tasks completed";
          }
          return label;
        }
      }
    }
  },
  scales: {
    y: {
      display: false // Hide Y axis labels
    },
    x: {
      display: false // Hide X axis labels
    }
  },
  elements: {
    line: {
      tension: 0.1
    }
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem) {
        return "$" + Number(tooltipItem.yLabel) + " and so worth it !";
      }
    }
  }
};
var chartInstance = new Chart(chart, {
  type: 'line',
  data: data,
  options: options
});

// ============================================
// Function: Buttons events
// ============================================
var view0 = document.querySelector(".view-0");
var view1 = document.querySelector(".view-1");
var view2 = document.querySelector(".view-2");
var view3 = document.querySelector(".view-3");
var view4 = document.querySelector(".view-4");
var view5 = document.querySelector(".view-5");
// Home button click
var homebtn = document.querySelector(".home-btn");
homebtn.addEventListener("click", () => {
  var counter = view0.style.width;
  var counter = counter.replace("%", "");
  let interval = window.setInterval(function () {
    if (counter > 0) {
      view0.style.width = (--counter) + '%';
      counter--;
    } else {
      clearInterval(interval);
      view0.classList.remove("view-show");
      view0.classList.add("view-hide");
      view1.classList.remove("view-hide");
      view1.classList.add("view-show");
      //console.log("Switched!");
    }
  }, 5);
});







// ============================================
// Tasks functions
// ============================================

function removeTask(task) {
  task.parentNode.removeChild(task);
  console.log('Task removed!');
}
