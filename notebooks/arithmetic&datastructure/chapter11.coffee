class Vertex
  constructor: (@label,@wasVisited)->

class Graph
  constructor: (@vertices)->
    @edges = 0
    @adj = []
    for i in [0..@vertices-1]
      @adj[i] = []
      @adj[i].push("")
    @marked = []
    @marked[i] = false for i in [0..@vertices-1]
    @addEdge = (v,w)->
      @adj[v].push(w)
      @adj[w].push(v)
      @edges++
    @showGraph = ()->
      for i of @adj
        console.log("#{i} -> #{@adj[i].toString().replace(',','')}")
    @dfs = (v)->
      @marked[v] = true
      for i in @adj[v]
        if not @marked[i]
          @dps(i)
    @bfs = (v)->
      queue = []
      @marked[v] = true
      queue.push(v)
      while queue.length>0
        w = queue.shift()
        for i in @adj(w)
          if not @marked[i]
            @marked[i] = true
            queue.push(i)
console.log('测试')
g = new Graph(5)
g.addEdge(0,1)
g.addEdge(0,2)
g.addEdge(1,3)
g.addEdge(2,4)
g.showGraph()
