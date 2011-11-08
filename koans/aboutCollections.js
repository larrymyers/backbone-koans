describe('About Backbone.Collection', function() {
    it('Can add Model instances via attribute objects and arrays.', function() {
        var toots = new Tooter.Toots();
        
        expect(toots.length).toBe(0);
        
        toots.add({ user: 'Wario', message: "I'm a gonna win!"});
        
        expect(toots.length).toBe(1);
        
        toots.add([
            { user: 'Peach', message: 'Waiting for Luigi.'}, 
            { user: 'Koopa Troopa', message: '...' }]);
        
        expect(toots.length).toBe(3);
    });
    
    it('Can have a url property to define the basic url structure for all contained models.', function() {
        var toots = new Tooter.Toots();
        
        expect(toots.url).toBe('/toots/');
    });
    
    it('Fires custom named events when the models change.', function() {
        var toots = new Tooter.Toots();
        
        var spyOnAdd = jasmine.createSpy();
        toots.bind('add', spyOnAdd);
        
        // FIX ME remove this line to fail
        toots.add({ user: 'Hammer Bros', message: 'Sharing an account is not cool.'});
        
        expect(spyOnAdd).toHaveBeenCalled();
        
        var spyOnRemove = jasmine.createSpy();
        toots.bind('remove', spyOnRemove);
        
        // FIX ME remove this line to fail
        toots.remove(toots.at(0));
        
        expect(spyOnRemove).toHaveBeenCalled();
    });
});