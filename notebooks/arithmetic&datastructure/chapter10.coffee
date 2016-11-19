class Node
  constructor: (ele,left=null,right=null)->
    @element = ele
    @left = left
    @right = right

class BinaryTree
  constructor: ()->
    @root = null
    @insert = (ele)->
      node = new Node(ele)
      if @root is null
        return @root = node
      else
        current = @root
        loop
            parent = current
            if node.element<current.element
              current = current.left
              if not current?
                parent.left = node
                break
            else
              current = current.right
              if not current?
                parent.right = node
                break
    @max = (node=@root)->
      until node.right is null
        node = node.right
      return node
    @min = (node=@root)->
      until node.left is null
        node = node.left
      return node
    @find = (data)->
      current = @root
      loop
        if current.element is data
          return current
        else
          if data > current.element
            if current.right? then current = current.right else null
          else
            if current.left? then current = current.left else null

    @remove = (data)->
      # 没有子节点
      node = @find(data)
      if node?
        if node.left is null and node.right is null
          return node.element = null
        else if node.left is null or node.right is null
          if node.left?
            node.element = node.left.element
            node.left = null
          else
            node.element = node.right.element
            node.right = null
        else if node.left isnt null and node.right isnt null
          min = @min(node.right)
          node.element = min.element
          current = node.right
          if current.element is min.element
            node.right = null
          else
            until current.left.element is min.element
              current = current.left
            return current.left = null

    @nodeNum = (node=@root)->
      count = 0
      trave =  (node)->
        if node?
          trave(node.left)
          trave(node.right)
          count++
      trave(node)
      return count
    # 中序遍历
inOrder = (node)->
  if node?
    inOrder(node.left)
    console.log(node.element)
    inOrder(node.right)
# 先序遍历
preOrder = (node)->
  if node?
    console.log(node.element)
    preOrder(node.left)
    preOrder(node.right)
postOrder = (node)->
  if node?
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.element)

# 测试
bst = new BinaryTree()
bst.insert(30)
bst.insert(10)
bst.insert(40)
bst.insert(15)
bst.insert(32)
bst.insert(45)
bst.insert(41)
#console.log('中序测试')
#inOrder(bst.root)
#console.log('先序测试')
#preOrder(bst.root)
#console.log('后序测试')
#postOrder(bst.root)
console.log('最大值测试')
console.log(bst.max().element)
console.log('最小值测试')
console.log(bst.min().element)
console.log('删除测试: 40')
bst.remove(40)
inOrder(bst.root)
console.log('节点个数测试')
console.log(bst.nodeNum())


