class List
  constructor: ()->
    @data = []
    @position = 0

  stick: (ele)->
    @data.splice(0,0,ele)
  insert: (ele,after)->
    pos = @data.indexOf(after)
    @data.splice(pos,0,ele)
  append: (ele)->
    @data[@size++] = ele
  remove: (ele)->
    pos = @data.indexOf(ele)
    if pos>1
      @data.splice(pos,1)
      true
    else
      false
  # 清空所有的元素
  clear: ()->
    @data = new Array()
  next: ()->
    if @position < @data.length then ++@position
  prev: ()->
    --@position
  font: ()->
    @position = 0
  end: ()->
    @position = if @data.length>0 then @data.length-1 else 0
  hasNext: ()->
    if @position < @data.length then true else false
  hasPrev: ()->
    if @position > 0 then true else false
  moveTo: (pos)->
    if pos>@data.length or pos<0 then false else @position=pos
  # 辅助函数
