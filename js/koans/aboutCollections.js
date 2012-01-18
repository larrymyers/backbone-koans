describe('About Backbone.Collection', function() {
    it('Can add Model instances as objects and arrays.', function() {
        var todos = new TodoList();
        
        expect(todos.length).toBe(0);
        
        todos.add({ text: 'Clean the kitchen' });
        
        expect(todos.length).toEqual(1);
        
        // How would you add multiple models to the collection with a single method call?
        
        expect(todos.length).toEqual(3);
    });
    
    it('Can have a comparator function to keep the collection sorted.', function() {
        var todos = new TodoList();
        
        // Without changing the sequence in which the todos are added, how would you
        // get the expectations below to pass?
        
        todos.add([{ text: 'Do the laundry',  order: 1},
                   { text: 'Clean the house', order: 2},
                   { text: 'Take a nap',      order: 3}]);
        
        expect(todos.at(0).get('text')).toEqual('Clean the house');
        expect(todos.at(1).get('text')).toEqual('Do the laundry');
        expect(todos.at(2).get('text')).toEqual('Take a nap');
    });
    
    it('Fires custom named events when the collection changes.', function() {
        var todos = new TodoList();
        
        var addModelCallback = jasmine.createSpy('-add model callback-');
        todos.bind('add', addModelCallback);
        
        // How would you get the 'add' event to fire?
        
        expect(addModelCallback).toHaveBeenCalled();
        
        var removeModelCallback = jasmine.createSpy('-remove model callback-');
        todos.bind('remove', removeModelCallback);
        
        // How would you get the 'remove' event to fire?
        
        expect(removeModelCallback).toHaveBeenCalled();
    });
});