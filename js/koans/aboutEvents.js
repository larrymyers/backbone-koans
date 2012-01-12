describe('About Backbone.Events', function() {
    
    var obj = {};
    _.extend(obj, Backbone.Events);
    
    beforeEach(function() {
        obj.unbind(); // remove all custom events before each spec is run.
    });
    
    it('Can extend javascript objects to support custom events.', function() {
        var basicObject = {};
        
        // How would you give basicObject these functions?
        // Hint: http://documentcloud.github.com/backbone/#Events
        
        expect(typeof basicObject.bind).toEqual('function');
        expect(typeof basicObject.unbind).toEqual('function');
        expect(typeof basicObject.trigger).toEqual('function');
    });
    
    it('Allows us to bind and trigger custom named events on an object.', function() {
        var callback = jasmine.createSpy('-Custom Event Callback-');
        
        obj.bind('basic event', callback);
        
        // How would you cause the callback for this custom event to be called?
        
        expect(callback).toHaveBeenCalled();
    });
    
    it('Also passes along any arguments to the callback when an event is triggered.', function() {
        var passedArgs = [];
        
        obj.bind('some event', function() {
            for (var i = 0; i < arguments.length; i++) {
                passedArgs.push(arguments[i]);
            }
        });
        
        obj.trigger('some event');
        
        expect(passedArgs).toEqual(['arg1', 'arg2']);
    });
    
    it('Can also bind the passed context to the event callback.', function() {
        var foo = { color: 'blue' };
        
        var changeColor = function() {
            this.color = 'red';
        }
        
        // How would you get 'this.color' to refer to 'foo' in the changeColor function?
        
        obj.bind('an event', changeColor);
        
        obj.trigger('an event');
        
        expect(foo.color).toEqual('red');
    });
    
    it("Uses 'all' as a special event name to capture all events bound to the object.", function() {
        var callback = jasmine.createSpy('-Custom Event Callback-');
        
        obj.bind('all', callback);
        
        expect(callback.callCount).toBe(1);
        expect(callback.mostRecentCall.args[0]).toBe('custom event');
    });
    
    it('Also can remove custom events from objects.', function() {
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