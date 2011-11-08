describe('About Backbone.Model', function() {
    
    it('Can be created with default values for its attributes.', function() {
        var toot = new Tooter.Toot();
        
        expect(toot.get('user')).toBe('Mario');
        expect(toot.get('message')).toBe('Squishing Goombas, collecting coins.');
        expect(toot.get('created_on').getTime).toBeDefined();
    });
    
    it('Will set passed attributes on the model instance when created.', function() {
        var now = new Date();
        
        var toot = new Tooter.Toot({ user: 'Luigi', created_on: now });
        
        expect(toot.get('user')).toBe('Luigi');
        expect(toot.get('message')).toBe('Squishing Goombas, collecting coins.');
        expect(toot.get('created_on')).toBe(now);
    });
    
    it('Will call a custom initialize function on the model instance when created.', function() {
        var toot = new Tooter.Toot({ user: 'toad' });
        
        expect(toot.get('user')).toBe('Toad');
    });
    
});