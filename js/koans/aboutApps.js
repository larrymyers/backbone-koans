describe('About Backbone Applications', function() {
    Backbone.localStorageDB = new Store('testTodos');
    
    var App;
    
    beforeEach(function() {
        $('body').append('<div id="app"></div>');
        
        App = new TodoApp({ appendTo: $('#app') });
    });
    
    afterEach(function() {
        App.todos.reset();
        $('#app').remove();
    });
    
    it('Should bootstrap the application by initializing the Collection.', function() {
        expect(App.todos).toBeDefined();
    });
});