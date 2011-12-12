(function($) {    
    var SummaryView = Backbone.View.extend({
        el: '#summary',
        
        initialize: function(options) {
            options.runner.bind('finished', this.render, this);
            
            this.render();
        },
        
        render: function() {
            var runner = this.options.runner,
                suites = runner.suites(),
                suite, results, suiteHTML, i;
            
            $(this.el).empty();
            
            for (i = 0; i < suites.length; i++) {
                suite = suites[i];
                results = suite.results();
                suiteHTML = '<li>' + suite.description + ': ' +  results.passedCount + ' of ' + results.totalCount + '</li>';
                $(this.el).append(suiteHTML);
            }
            
            return this;
        }
    });
    
    var ProgressView = Backbone.View.extend({
        el: '#progress',
        
        initialize: function(options) {
            options.runner.bind('finished', this.render, this);
        },
        
        render: function() {
            var runner = this.options.runner,
                suites = runner.suites(),
                suite, items, specs, spec, i, j, suiteElt, specElt;
            
            if (KoansFailure) {
                return this;
            }
            
            for (i = 0; i < suites.length; i++) {
                suite = suites[i];
                specs = suite.specs();
                
                suiteElt = this.make('h2', {}, suite.description);
                $(this.el).append(suiteElt);
                
                for (j = 0; j < specs.length; j++) {
                    spec = specs[j];
                    results = spec.results();
                    
                    var specStyle = (results.failedCount > 0) ? 'alert-message block-message error' : 'alert-message block-message success';
                    
                    specElt = this.make('div', {'class': specStyle}, spec.description);
                    $(this.el).append(specElt);
                    
                    if (results.failedCount > 0) {
                        KoansFailure = true;
                        return this;
                    }
                }
            }
            
            return this;
        }
    });
    
    var KoansReporter = function() {
        
    };
    
    _.extend(KoansReporter.prototype, {
        reportRunnerStarting: function(runner) {
            window.KoansFailure = false;
            
            _.extend(runner, Backbone.Events);
            new SummaryView({runner: runner});
            new ProgressView({runner: runner});
        },
        
        reportRunnerResults: function(runner) {
            runner.trigger('finished');
        },
        
        reportSuiteResults: function(suite) {
        },
        
        reportSpecStarting: function(spec) {
        },
        
        reportSpecResults: function(spec) {
        },
        
        log: function(str) {
            
        }
    });
    
    window.KoansReporter = KoansReporter;
}(jQuery));