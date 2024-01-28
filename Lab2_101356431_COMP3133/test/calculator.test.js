const assert = require('assert');
const calculator = require('../app/calculator');

// Passing Assertions

describe('Validating Calculator Functions', () => { 
    it('should return 7 when the value is 5 + 2', () => {
        assert.equal(calculator.add(5,2), 7);
    });

    it('should return 3 when the value is 5 - 2', () => {
        assert.equal(calculator.subtract(5,2), 3);
    });

    it('should return 10 when the value is 5 * 2', () => {
        assert.equal(calculator.multiply(5,2), 10);
    });

    it('should return 5 when the value is 10 / 2', () => {
        assert.equal(calculator.divide(10,2), 5);
    });

// Failing Assertions


    it('should return 7 when the value is 5 + 2', () => {
        assert.equal(calculator.add(5,2), 8);
    });

    it('should return 3 when the value is 5 - 2', () => {
        assert.equal(calculator.subtract(5,2), 5);
    });

    it('should return 10 when the value is 5 * 2', () => {
        assert.equal(calculator.multiply(5,2), 12);
    });

    it('should return 5 when the value is 10 / 2', () => {
        assert.equal(calculator.divide(5,2), 2);
    });

})