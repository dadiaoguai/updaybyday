(function() {
  var Stack, factorial, isPalindrome, mulBase;

  Stack = (function() {
    function Stack() {
      this.data = [];
    }

    Stack.prototype.pop = function() {
      if (this.data.length > 0) {
        return --this.data.length;
      }
    };

    Stack.prototype.push = function(ele) {
      return this.data[this.data.length] = ele;
    };

    Stack.prototype.peek = function() {
      return this.data[this.data.length - 1];
    };

    return Stack;

  })();

  mulBase = function(num, base) {
    var stack;
    stack = new Stack();
    (function() {
      stack.push(num % base);
      return num = Math.floor(num / base);
    })();
    while (num > 0) {
      stack.push(num % base);
      num = Math.floor(num / base);
    }
    return parseInt(stack.data.reverse().join(''));
  };

  isPalindrome = function(word) {
    var reversewd;
    reversewd = word.split('').reverse().join('');
    if (reversewd === word) {
      return true;
    } else {
      return false;
    }
  };

  factorial = function(num) {
    var i, j, len, ref, result, stack;
    if (!(typeof num === 'number')) {
      false;
    }
    num = parseInt(num);
    result = 1;
    stack = new Stack();
    while (num > 0) {
      stack.push(num--);
    }
    console.log(stack.data);
    console.log('#----');
    ref = stack.data;
    for (j = 0, len = ref.length; j < len; j++) {
      i = ref[j];
      result *= i;
    }
    return result;
  };

  console.log(factorial(5));

}).call(this);
