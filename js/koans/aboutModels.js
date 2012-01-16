describe('About Backbone.Model', function() {
    
    it('Can be created with default values for its attributes.', function() {
        var todo = new Todo();
        
        var defaultAttrs = {
            text: 'What is the default value?',
            done : 'What is the default value?',
            order: 'What is the default value?'
        }
        
        expect(todo.attributes).toEqual(defaultAttrs);
    });
    
    it('Will set passed attributes on the model instance when created.', function() {
        var todo = new Todo({ text: 'Get oil change for car.' });
        
        var expectedText = 'FIX ME';
        
        expect(todo.get('text')).toEqual(expectedText);
    });
    
    it('Will call a custom initialize function on the model instance when created.', function() {
        var todo = new Todo({ text: 'Stop monkeys from throwing their own feces!' });
        
        expect(todo.get('text')).toBe('Stop monkeys from throwing their own rainbows!');
    });
    
    it('Fires a custom event when the state changes.', function() {
        var callback = jasmine.createSpy('-change event callback-');
        
        var todo = new Todo();
        
        todo.bind('change', callback);
        
        // How would you update a property on the todo here?
        // Hint: http://documentcloud.github.com/backbone/#Model-set
        
        expect(callback).toHaveBeenCalled();
    });
    
    it('Can contain custom validation rules, and will trigger an error event on failed validation.', function() {
        var errorCallback = jasmine.createSpy('-error event callback-');
        
        var todo = new Todo();
        
        todo.bind('error', errorCallback);
        
        // What would you need to set on the todo properties to cause validation to fail?
        
        var errorArgs = errorCallback.mostRecentCall.args;
        
        expect(errorArgs).toBeDefined();
        expect(errorArgs[0]).toBe(todo);
        expect(errorArgs[1]).toBe('Todo.done must be a boolean value.');
    });
});