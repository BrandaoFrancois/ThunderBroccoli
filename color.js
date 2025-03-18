var Color = document.color = {
  rField: null,
  gField: null,
  bField: null,
  hexaField: null,

  init: function() {
    this.rField = document.getElementById('color_r');
    this.gField = document.getElementById('color_g');
    this.bField = document.getElementById('color_b');
    this.hexaField = document.getElementById('color_hexa');

    this.rField.onchange = this.onDecimalColorChange.bind(this);
    this.gField.onchange = this.onDecimalColorChange.bind(this);
    this.bField.onchange = this.onDecimalColorChange.bind(this);
    this.hexaField.onchange = this.onHexaDecimalColorChange.bind(this);
  },

  onDecimalColorChange: function() {
    if (this.isDecimalsValid()) {
      this.hexaField.value = this.translateToHexa(
        this.rField.value,
        this.gField.value,
        this.bField.value
      );
    }
  },

  onHexaDecimalColorChange: function() {
    if (this.isHexaValid()) {
      const hexaValue = this.hexaField.value;
      this.rField.value = this.translateToDec(hexaValue, 0);
      this.gField.value = this.translateToDec(hexaValue, 1);
      this.bField.value = this.translateToDec(hexaValue, 2);
    }
  },

  isDecimalsValid: function() {
    return this.isDecimalValid(this.rField.value) && 
      this.isDecimalValid(this.gField.value) && 
      this.isDecimalValid(this.bField.value);
  },

  isDecimalValid: function(value) {
    const testReg = /^[0-9]{1,3}$/;
    if (!testReg.test(value)) {
      return false;
    }
    const valueInt = parseInt(value);
    return valueInt >= 0 && valueInt <= 255; 
  },

  isHexaValid: function() {
    const hexa = this.hexaField.value;
    const testReg = /^[0-9a-fA-F]{6}$/;
    return testReg.test(hexa);
  },

  translateToHexa: function(r, g, b) {
    const rHexa = parseInt(r).toString(16);
    const gHexa = parseInt(g).toString(16);
    const bHexa = parseInt(b).toString(16);
    return (rHexa.length == 1 ? '0' : '') + rHexa +
      (gHexa.length == 1 ? '0' : '') + gHexa
      (bHexa.length == 1 ? '0' : '') + bHexa;
  },

  translateToDec: function(hexa, partNumber) {
    const x = partNumber * 2;
    const extractedNumbers = hexa.substring(x, x + 2);
    return parseInt(extractedNumbers, 16);
  }
};

Color.init();
