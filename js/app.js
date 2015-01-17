App = Ember.Application.create();

App.Router.map(function(){
    this.resource('about');
    this.resource('posts', function(){
        this.resource('post', { path: ':post_id' });
    });

});

App.PostsRoute = Ember.Route.extend({
    model: function() {
        //return posts;
        return $.getJSON('http://tomdale.net/api/get_recent_posts/?callback=?').then(function(data){
            return data.posts.map(function(post){
                post.body = post.content;
                return post;
            });
        });
    }
});

App.PostRoute = Ember.Route.extend({
    model: function(params) {
        //return posts.findBy('id', params.post_id);
        return $.getJSON('http://tomdale.net/api/get_post/?id='+params.post_id+'&callback=?').then(function(data){
            data.post.body = data.post.content;
            return data.post;
        });
    }
});

App.PostController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function() {
            this.set('isEditing', true);
        },

        doneEditing: function() {
            this.set('isEditing', false);
        }
    }
});

Ember.Handlebars.helper('format-date', function(date){
    return moment(date).fromNow();
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function(input){
    return new Handlebars.SafeString(showdown.makeHtml(input));
});

var posts = [
    {
        id: '1',
        title: 'some random title!',
        author: { name: 'John Doe' },
        date: new Date('05-01-2014'),
        excerpt: "alcohol bitter wheat beer glass, heat exchanger squares. rims, barre",
        body: "alcohol bitter wheat beer glass, heat exchanger squares. rims, barrel, filter rims alpha acid barleywine top-fermenting yeast sour/acidic length, bottle conditioning. racking, conditioning tank finishing hops grainy all-malt! carbonation lagering aau lauter cask conditioned ale units of bitterness brewpub. barrel, lagering bottle conditioning mouthfeel mash tun? autolysis; abv bottle conditioning wort sparge. hop back malt extract heat exchanger."
    },
    {
        id: '2',
        title: 'Ngmoco dropio zinch prezi akismet',
        author: { name: 'Andrew Wandkerst' },
        date: new Date('12-31-2014'),
        excerpt: "Ifttt lala mobly joyent vuvox whrrl trulia ifttt foodzie",
        body: "Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Cuil yoono eduvant ning bitly ifttt insala sifteo, dropio stypi imvu jumo zoodles blekko lala, chartly xobni jabber jajah lijit disqus plaxo. Balihoo wakoopa spotify woopra joyent rovio kaboodle diigo lanyrd wikia, whrrl skype chegg koofers twitter jiglu dopplr octopart, zanga yoono lala sococo flickr heekya ifttt sococo. Squidoo hojoki udemy zillow joost insala scribd spotify doostang revver handango, plugg zappos bebo zappos zooomr shopify kosmix ideeli bebo zapier greplin, joyent ifttt dopplr klout cloudera klout vuvox eskobo doostang. Zapier loopt blekko groupon diigo, wufoo yuntaa oovoo."
    }
];
