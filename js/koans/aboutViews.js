describe('About Backbone.View', function() {
    var todoView;
    
    beforeEach(function() {
        var todo = new Todo();
        todo.localStorage = new Store('ViewSpecs');
        
        $('body').append('<ul id="todoList"></ul>');
        todoView = new TodoView({ model: todo });
    });
    
    afterEach(function() {
        todoView.remove();
        $('#todoList').remove();
    });
    
    it('Views are tied to a DOM element when created, based off the property provided.', function() {
        var tagName = 'what html element represents this view?';
        
        expect(tagName).toEqual(todoView.tagName)
        expect(tagName).toEqual(todoView.el.tagName.toLowerCase());
    });
    
    it('Views are backed by a model instance, which provides the data when rendering the view.', function() {
        // What method would you call on todoView to get this expectation to pass?
        // Hint: You can accomplish this without accessing todoView.model directly.
        
        expect(todoView.model.get('done')).toBe(true);
    });
    
    it('When rendered, the view element contains the complete DOM representation of the view.', function() {
        todoView.render();
        
        // Hint: render() just builds the DOM representation of the view, but doesn't insert it into the DOM.
        //       How would you append it to the ul#todoList? 
        //       How do you access the view's DOM representation?
        //
        // Hint: http://documentcloud.github.com/backbone/#View-el and TodoApp.addOne in todos.js
        
        expect($('#todoList').find('li').length).toBe(1);
    });
    
    it('Views can contain an events hash to wire up view methods to DOM events.', function() {
        var viewElt;
        
        spyOn(todoView.model, 'toggle');
        
        // Render the <li> for the view, and append it to the <ul>
        runs(function() {
            $('#todoList').append(todoView.render().el);
        });
        
        // We use runs and waitsFor since this is an async process, and want to make
        // sure we don't run our expectations until the view's markup is accessible in the DOM.
        waitsFor(function() {
            viewElt = $('#todoList li input.check').filter(':first');
            
            return viewElt.length > 0;
        }, 1000, 'Expected DOM Elt to exist');
        
        // Make your changes within this function, you don't need to touch the code above.
        runs(function() {
            // Hint: How would you trigger the view, via a DOM Event, to toggle the 'done' status?
            //       (See todos.js line 70, where the events hash is defined.)
            //
            // Hint: http://api.jquery.com/click
            
            expect(todoView.model.toggle).toHaveBeenCalled();
        });
    });
});