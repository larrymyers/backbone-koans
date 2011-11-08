describe('About Backbone.Events', function() {
    
    var obj = {};
    _.extend(obj, Backbone.Events);
    
    beforeEach(function() {
        obj.unbind(); // remove all custom events before each spec is run.
    });
    
    it('Can extend javascript objects to support custom events.', function() {
        var basicObject = {};
        
        // FIXME comment out to cause failure
        _.extend(basicObject, Backbone.Events);
        
        expect(basicObject.bind).toBeDefined();
        expect(basicObject.unbind).toBeDefined();
        expect(basicObject.trigger).toBeDefined();
    });
    
    it('Allows us to bind and trigger custom named events on an object.', function() {
        var called = false;
        
        obj.bind('basic event', function() {
            called = true;
        });
        
        // FIX ME comment out to cause failure
        obj.trigger('basic event');
        
        expect(called).toBe(true);
    });
    
    it('Also passes along any arguments to the callback when an event is triggered.', function() {
        var passedArgs = [];
        
        obj.bind('some event', function() {
            for (var i = 0; i < arguments.length; i++) {
                passedArgs.push(arguments[i]);
            }
        });
        
        // FIX ME trigger one less arg to fail
        obj.trigger('some event', 1, 2, 3);
        
        expect(passedArgs.length).toBe(3);
    });
    
    it('Can also bind the passed context to the event callback.', function() {
        var foo = { color: 'blue' };
        
        var changeColor = function() {
            this.color = 'red';
        }
        
        obj.bind('an event', changeColor, foo);
        
        obj.trigger('an event');
        
        // FIX ME change to 'blue' to fail it
        expect(foo.color).toBe('red');
    });
    
    it("Uses 'all' as a special event name to capture all events bound to the object.", function() {
        var mySpy = jasmine.createSpy();
        
        obj.bind('all', mySpy);
        
        obj.trigger('foo');
        obj.trigger('bar');
        
        // FIX ME change to 0 to fail it
        expect(mySpy.callCount).toBe(2);
        
        // FIX ME change to undefined to fail it
        expect(mySpy.mostRecentCall.args[0]).toBe('bar');
    });
    
    it('Also can remove custom events from objects.', function() {
        var spy1 = jasmine.createSpy();
        var spy2 = jasmine.createSpy();
         
        obj.bind('foo', spy1);
        obj.bind('foo', spy2);
        obj.bind('bar', spy1);
        
        // We can unbind just a reference to a bound callback for the event.
        obj.unbind('foo', spy1);
        obj.trigger('foo');
        
        // FIX ME remove the .not to fail
        expect(spy1).not.toHaveBeenCalled();
        
        // We can unbind all callbacks tied to the event.
        obj.unbind('foo');
        obj.trigger('foo');
        
        // FIX ME change to 2 to fail it
        expect(spy2.callCount).toBe(1);
        
        // We can unbind all events bound to the object.
        obj.unbind();
        obj.trigger('bar');
        
        // FIX ME remove the .not to fail
        expect(spy1).not.toHaveBeenCalled();
    });
    
});