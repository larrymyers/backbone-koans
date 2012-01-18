xdescribe('About Backbone.View', function() {
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
    
    it('Should be tied to a DOM element when created, based off the property provided.', function() {
        var tagName = 'what html element represents this view?';
        
        expect(todoView.el.tagName.toLowerCase()).toBe(tagName);
    });
    
    it('Is backed by a model instance, which provides the data representation.', function() {
        // What method would you call on todoView to get this expectation to pass?
        // Hint: You can accomplish this without accessing todoView.model directly.
        
        expect(todoView.model.get('done')).toBe(true);
    });
    
    it('Can render, after which the DOM representation of the view will be visible.', function() {
        todoView.render();
        
        // Hint: render() just builds the DOM representation of the view, but doesn't insert it into the DOM.
        //       How would you append it to the ul#todoList? 
        //       How do you access the view's DOM representation?
        //
        // Hint: http://documentcloud.github.com/backbone/#View-el
        
        expect($('#todoList').find('li').length).toBe(1);
    });
    
    it('Can use an events hash to wire up view methods to DOM elements.', function() {
        var viewElt;
        
        spyOn(todoView.model, 'toggle');
        
        runs(function() {
            $('#todoList').append(todoView.render().el);
        });
        
        waitsFor(function() {
            viewElt = $('#todoList li input.check').filter(':first');
            
            return viewElt.length > 0;
        }, 1000, 'Expected DOM Elt to exist');
        
        runs(function() {
            // Hint: How would you trigger the view, via a DOM Event, to toggle the 'done' status?
            //       (See todos.js line 70, where the events hash is defined.)
            //
            // Hint: http://api.jquery.com/click
            
            expect(todoView.model.toggle).toHaveBeenCalled();
        });
    });
});