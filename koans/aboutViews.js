describe('About Backbone.View', function() {
    var tootView;
    
    afterEach(function() {
        tootView.remove();
    });
    
    it('Should be backed by a DOM element when created, based off the property provided.', function() {
        tootView = new Tooter.TootView();
        
        // FIX ME change toBe('li') to toBe('change-me') to fail it
        expect(tootView.el.tagName.toLowerCase()).toBe('li');
    });
    
    it('Is backed by a Toot model instance, which provides the data.', function() {
        
    });
    
    it('Can render itself and be visible in the DOM.', function() {
        $('body').append('<ul id="tootList"></ul>');
        
        tootView = new Tooter.TootView({ parentElt: '#tootList', model: new Tooter.Toot() });
        tootView.render();
        
        expect($('#tootList').children().length).toBe(1);
        
        
        $('#tootList').remove();
    });
});