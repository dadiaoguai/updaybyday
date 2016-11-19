class Node
  constructor: (ele)->
    @element=ele
    @next=null
class Link
  constructor: ()->
    @head = new Node('head')
    @find = (ele)->
      curNode = @head
      while curNode.next != null and curNode.next.element != ele
        curNode = curNode.next
      return if curNode.next is null then curNode else curNode.next
    @findPrevious = (ele)->
      curNode = @head
      while (not(curNode.next is null) and curNode.next.element != ele)
        curNode = curNode.next
      return if curNode.element is 'head' then null else curNode

    @insert = (cur,ele)->
      ele = new Node(ele)
      curNode = @find(cur)
      after = curNode.next
      curNode.next = ele
      ele.next = after
      return true
    @remove = (ele)->
      prev = @findPrevious(ele)
      prev.next = ele.next
    @display = ()->
      curNode = @head
      until curNode.next is null
        console.log(curNode.element)
        curNode = curNode.next




