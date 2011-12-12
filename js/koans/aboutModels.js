describe('About Backbone.Model', function() {
    
    it('Can be created with default values for its attributes.', function() {
        var toot = new Tooter.Toot();
        
        expect(toot.get('user')).toBe('Some default name.');
        expect(toot.get('message')).toBe('Some default message.');
        expect(toot.get('created_on').getTime).toBeDefined();
    });
    
    it('Will set passed attributes on the model instance when created.', function() {
        var now = new Date();
        
        var toot = new Tooter.Toot({ user: 'Luigi', created_on: now });
        
        expect(toot.get('user')).toBe('Mario');
        expect(toot.get('message')).toBe('Squishing Goombas, collecting coins.');
        expect(toot.get('created_on')).toBe(now);
    });
    
    it('Will call a custom initialize function on the model instance when created.', function() {
        var toot = new Tooter.Toot({ user: 'toad' });
        
        expect(toot.get('user')).toBe('toad');
    });
    
    it('Fires a custom event when the state changes.', function() {
        var spy = jasmine.createSpy();
        
        var toot = new Tooter.Toot();
        
        toot.bind('change', spy);
        
        // How would you update a property on the toot here?
        // Hint: http://documentcloud.github.com/backbone/#Model-set
        
        expect(spy).toHaveBeenCalled();
    });
    
    it('Can contain custom validation rules, and will trigger an error event on failed validation.', function() {
        var errorCallback = jasmine.createSpy();
        
        var toot = new Tooter.Toot();
        
        toot.bind('error', errorCallback);
        
        // How would you set an invalid message on the toot?
        
        var errorArgs = errorCallback.mostRecentCall.args;
        
        expect(errorArgs[0]).toBe(toot);
        expect(errorArgs[1]).toBe('Must contain a message.');
    });
});