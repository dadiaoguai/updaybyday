(function() {
  var Graph, Vertex, g;

  Vertex = (function() {
    function Vertex(label, wasVisited) {
      this.label = label;
      this.wasVisited = wasVisited;
    }

    return Vertex;

  })();

  Graph = (function() {
    function Graph(vertices) {
      var i, j, k, ref, ref1;
      this.vertices = vertices;
      this.edges = 0;
      this.adj = [];
      for (i = j = 0, ref = this.vertices - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        this.adj[i] = [];
        this.adj[i].push("");
      }
      this.marked = [];
      for (i = k = 0, ref1 = this.vertices - 1; 0 <= ref1 ? k <= ref1 : k >= ref1; i = 0 <= ref1 ? ++k : --k) {
        this.marked[i] = false;
      }
      this.addEdge = function(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        return this.edges++;
      };
      this.showGraph = function() {
        var results;
        results = [];
        for (i in this.adj) {
          results.push(console.log(i + " -> " + (this.adj[i].toString().replace(',', ''))));
        }
        return results;
      };
      this.dfs = function(v) {
        var l, len, ref2, results;
        this.marked[v] = true;
        ref2 = this.adj[v];
        results = [];
        for (l = 0, len = ref2.length; l < len; l++) {
          i = ref2[l];
          if (!this.marked[i]) {
            results.push(this.dps(i));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      this.bfs = function(v) {
        var queue, results, w;
        queue = [];
        this.marked[v] = true;
        queue.push(v);
        results = [];
        while (queue.length > 0) {
          w = queue.shift();
          results.push((function() {
            var l, len, ref2, results1;
            ref2 = this.adj(w);
            results1 = [];
            for (l = 0, len = ref2.length; l < len; l++) {
              i = ref2[l];
              if (!this.marked[i]) {
                this.marked[i] = true;
                results1.push(queue.push(i));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          }).call(this));
        }
        return results;
      };
    }

    return Graph;

  })();

  console.log('测试');

  g = new Graph(5);

  g.addEdge(0, 1);

  g.addEdge(0, 2);

  g.addEdge(1, 3);

  g.addEdge(2, 4);

  g.showGraph();

}).call(this);
