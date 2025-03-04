var Calculator = document.calculator = {
  cxField: null,
  cyField: null,
  rField: null,
  resultField: null,
  
  init: function() {
    let btt = document.getElementById('validate');
    
    this.cxField = document.getElementById('cx');
    this.cyField = document.getElementById('cy');
    this.rField = document.getElementById('r');
    this.resultField = document.getElementById('result');

    btt.onclick = this.validate.bind(this);
    alert("Init successfull !");
  },

  validate: function() {
    this.resultField.value = this.generate(
      this.cxField.value,
      this.cyField.value,
      this.rField.value
    );
  },

  generate: function(cx, cy, r) {
    return 'M' + cx + ',' + cy + "A" + r + "," + r + " 0,1 1," + (cx + 2 * r) + " " + cy + " A " + r + "," + r + " 0,1 1," + cx + "," + cy + " Z";
  }
};

Calculator.init();
