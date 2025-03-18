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

    this.rField.onChange = this.onDecimalColorChange.bind(this);
    this.gField.onChange = this.onDecimalColorChange.bind(this);
    this.bField.onChange = this.onDecimalColorChange.bind(this);
    this.hexaField.onChange = this.onHexaDecimalColorChange.bind(this);
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
    return r.toString(16) + g.toString(16) + b.toString(16);
  },

  translateToDec: function(hexa, partNumber) {
    const x = partNumber * 2;
    const extractedNumbers = hexa.substring(x, x + 2);
    return parseInt(extractedNumbers, 16);
  }
};

Color.init();
