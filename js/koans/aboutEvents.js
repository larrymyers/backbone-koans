xdescribe('About Backbone.Events', function() {
    
    var obj = {};
    _.extend(obj, Backbone.Events);
    
    beforeEach(function() {
        obj.unbind(); // remove all custom events before each spec is run.
    });
    
    it('Any regular javascript object can be extended with custom event functionality.', function() {
        var basicObject = {};
        
        // How would you get these Backbone.Events functions added to basicObject?
        // Hint: http://documentcloud.github.com/backbone/#Events
        
        expect(typeof basicObject.bind).toEqual('function');
        expect(typeof basicObject.unbind).toEqual('function');
        expect(typeof basicObject.trigger).toEqual('function');
    });
    
    it('Events allows us to bind and trigger custom named events on an object.', function() {
        var callback = jasmine.createSpy('-Custom Event Callback-');
        
        obj.bind('basic event', callback);
        
        // How would you cause the callback for this custom event to be called?
        
        expect(callback).toHaveBeenCalled();
    });
    
    it('Triggered events pass along any arguments to the callback.', function() {
        var callback = jasmine.createSpy('-Custom Event Callback-');
        
        obj.bind('some event', callback);
        
        obj.trigger('some event');
        
        expect(callback.mostRecentCall.args).toEqual(['arg1', 'arg2']);
    });
    
    it('Bound events can also pass a specific context to the event callback.', function() {
        var foo = { color: 'blue' };
        
        var changeColor = function() {
            this.color = 'red';
        }
        
        /***
         * Does refering to 'this' from within an anonymous function seem foreign to you?
         * No idea what 'context' refers to when talking about javascript?
         * Here's a some reading that can help clarify things:
         * http://javascriptweblog.wordpress.com/2010/08/30/understanding-javascripts-this/
         *
         * Now, back to the koans ...
         ***/
        
        // How would you get 'this.color' to refer to 'foo' in the changeColor function?
        
        obj.bind('an event', changeColor);
        
        obj.trigger('an event');
        
        expect(foo.color).toEqual('red');
    });
    
    it("Evented objects can bind 'all' as a special event name to capture all triggered events on the object.", function() {
        var callback = jasmine.createSpy('-Custom Event Callback-');
        
        obj.bind('all', callback);
        
        // How are you going to call obj.trigger to get both expectations passing?
        
        expect(callback.callCount).toBe(1);
        expect(callback.mostRecentCall.args[0]).toBe('custom event');
    });
    
    it('Evented objects can also have their named events removed.', function() {
        var spy1 = jasmine.createSpy('-Spy 1-');
        var spy2 = jasmine.createSpy('-Spy 2-');
        var spy3 = jasmine.createSpy('-Spy 3-');
         
        obj.bind('foo', spy1);
        obj.bind('foo', spy2);
        obj.bind('foo', spy3);
        obj.bind('bar', spy1);
        
        // How do you unbind just a single callback for the event?
        
        obj.trigger('foo');
        
        expect(spy1).not.toHaveBeenCalled();
        
        // How do you unbind all callbacks tied to the event with a single method?
        
        obj.trigger('foo');
        
        expect(spy2.callCount).toEqual(1);
        expect(spy3.callCount).toEqual(1);
        
        // How do you unbind all callbacks and events tied to the object with a single method?
        
        obj.trigger('bar');
        
        expect(spy1).not.toHaveBeenCalled();
    });
    
});