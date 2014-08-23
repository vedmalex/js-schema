var vows = require('vows'),
    assert = require('assert'),
    schema = require('../../index.js');

// Create a Test Suite
vows.describe('Validation Array with errors').addBatch({
    'Array.of': {
        'Number -> input : [null, undefined, Object, Function]':function(){
            var input = [
                null, undefined, Object, Function
            ];
            var aSchema = schema(Array.of(Number));
            input.forEach(function(input){
                var result = aSchema.errors(input);
                assert(/(.*) is not an instance of Array/.test(result.message), "Errors should return  'X is not an instance of Array'");
            })
        },
        'Number -> input : only numbers': function () {
                var input = [9,0,1,2,3,4,5,6];
                var aSchema = schema(Array.of(Number));
                var result = aSchema.errors(input);
                assert(result === false, "errors method should return false");
        }
    },
    'Array.of(length, pattern)': {},
    'Array.of(minLength, maxLength, pattern)': {},
    'Array.like(array)': {}
}).export(module)