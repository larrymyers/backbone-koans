describe('About Backbone.View', function() {
    var todoView;
    
    beforeEach(function() {
        todoView = new TodoView({ model: new Todo() });
    });
    
    afterEach(function() {
        todoView.remove();
    });
    
    xit('Should be tied to a DOM element when created, based off the property provided.', function() {
        expect(todoView.el.tagName.toLowerCase()).toBe('what html element tag name represents this view?');
    });
    
    xit('Is backed by a model instance, which provides the data.', function() {
        expect(todoView.model).toBeDefined();
        expect(todoView.model.get('done')).toBe("What's the value for Todo.get('done') here?");
    });
    
    xit('Can render, after which the DOM representation of the view will be visible.', function() {
        $('body').append('<ul id="todoList"></ul>');
        
        todoView.render();
        
        // Hint: render() just builds the DOM representation of the view, but doesn't insert it into the DOM.
        //       How would you append it to the ul#todoList? 
        //       How do you access the view's DOM representation?
        //
        // Hint: http://documentcloud.github.com/backbone/#View-el
        
        expect($('#todoList').find('li').length).toBe(1);
        
        $('#todoList').remove();
    });
    
    it('Can use an events hash to wire up view methods to DOM elements.', function() {
        // TODO example using TootApp view to show how to test events hash
    });
});