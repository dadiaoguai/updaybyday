(function() {
  var List;

  List = (function() {
    function List() {
      this.data = [];
      this.position = 0;
    }

    List.prototype.stick = function(ele) {
      return this.data.splice(0, 0, ele);
    };

    List.prototype.insert = function(ele, after) {
      var pos;
      pos = this.data.indexOf(after);
      return this.data.splice(pos, 0, ele);
    };

    List.prototype.append = function(ele) {
      return this.data[this.size++] = ele;
    };

    List.prototype.remove = function(ele) {
      var pos;
      pos = this.data.indexOf(ele);
      if (pos > 1) {
        this.data.splice(pos, 1);
        return true;
      } else {
        return false;
      }
    };

    List.prototype.clear = function() {
      return this.data = new Array();
    };

    List.prototype.next = function() {
      if (this.position < this.data.length) {
        return ++this.position;
      }
    };

    List.prototype.prev = function() {
      return --this.position;
    };

    List.prototype.font = function() {
      return this.position = 0;
    };

    List.prototype.end = function() {
      return this.position = this.data.length > 0 ? this.data.length - 1 : 0;
    };

    List.prototype.hasNext = function() {
      if (this.position < this.data.length) {
        return true;
      } else {
        return false;
      }
    };

    List.prototype.hasPrev = function() {
      if (this.position > 0) {
        return true;
      } else {
        return false;
      }
    };

    List.prototype.moveTo = function(pos) {
      if (pos > this.data.length || pos < 0) {
        return false;
      } else {
        return this.position = pos;
      }
    };

    return List;

  })();

}).call(this);
