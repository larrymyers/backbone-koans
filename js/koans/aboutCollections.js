describe('About Backbone.Collection', function() {
    it('Can add Model instances via attribute objects and arrays.', function() {
        var toots = new Tooter.Toots();
        
        expect(toots.length).toBe(0);
        
        toots.add({ user: 'Wario', message: "I'm a gonna win!"});
        
        expect(toots.length).toBe(0);
        
        toots.add([
            { user: 'Peach', message: 'Waiting for Luigi.'}, 
            { user: 'Koopa Troopa', message: '...' }
        ]);
        
        expect(toots.length).toBe(0);
    });
    
    it('Can have a url property to define the basic url structure for all contained models.', function() {
        var toots = new Tooter.Toots();
        
        expect(toots.url).toBe('what goes here?');
    });
    
    it('Fires custom named events when the models change.', function() {
        var toots = new Tooter.Toots();
        
        var addCallback = jasmine.createSpy('add callback');
        toots.bind('add', addCallback);
        
        // How would you get the 'add' event to trigger?
        
        expect(addCallback).toHaveBeenCalled();
        
        var removeCallback = jasmine.createSpy('remove callback');
        toots.bind('remove', removeCallback);
        
        // How would you get the 'remove' callback to trigger?
        
        expect(removeCallback).toHaveBeenCalled();
    });
});