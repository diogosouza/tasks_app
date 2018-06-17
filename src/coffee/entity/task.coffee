class Task
	constructor: (@taskName, @priority, @dueDate, @done) ->
		throw "Invalid task description" if @taskName.length is 0
		throw "Invalid priority" if @priority < 1
		throw "Invalid date" if @dueDate.length is 0
	
	getPriority: ->
		@priority
		
	getDueDate: ->
		@dueDate
		
	increasePriority: ->
		@priority++
		
	finish: ->
		@priority = 0
		@dueDate = 0
		@done = true
		
	isDone: ->
		@done
	
window.GLOBALS.Task = Task