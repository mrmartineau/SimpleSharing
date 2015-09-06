# Simple Sharing
## Social / share links that do not rely on Javascript

- [x] Twitter
- [x] Facebook
- [x] Google+
- [x] Instapaper
- [x] LinkedIn
- [x] Tumblr
- [x] Pinterest
- [x] The Fancy
- [x] Whatsapp

### Styled links
I am working on creating a normalised set of share links that look exactly like the official ones with the exception that they are all the same size. My progress is outlined below:

- [x] Twitter
- [x] Facebook (old style)
- [x] Facebook (new style)
- [ ] Google+
- [ ] Pinterest
- [ ] Instapaper
- [ ] The Fancy
- [ ] Tumblr
- [ ] LinkedIn


### Get started
If all you need is the markup, copy and paste the items below, but if you want some styling, download the repo and open `index.html` in your browser - **WARNING** they are still a work a progress.

### Note
Below you will see wildcards being used, like `{URL}` & `{TITLE}` etc, these should be replaced by whatever (in this case) url or share title that you see fit. 

#### Twitter [tweet]
```html
<a href="https://twitter.com/intent/tweet?original_referer={REFERRER_URL}&source=tweetbutton&text={TWEET_TEXT}&url={URL}&via={Username}" title="Tweet" class="socialBtn socialBtn--twitter">Tweet</a>

<!-- Example-->
<a href="https://twitter.com/intent/tweet?original_referer=http://github.com&source=tweetbutton&text=This is the tweet text&url=http://https://github.com/mrmartineau/SimpleSharing/&via=MrMartineau" title="Tweet" class="socialBtn socialBtn--twitter">Tweet</a>
```

#### Facebook [share]
```html
<a href="http://www.facebook.com/share.php?u={URL}&t={TITLE}" class="socialBtn socialBtn--facebook">Share on Facebook</a>

<!-- Example-->
<a href="http://www.facebook.com/share.php?u=http://https://github.com/mrmartineau/SimpleSharing/&t=Simple Sharing links on Github" class="socialBtn socialBtn--facebook">Share on Facebook</a>
```


#### Google+ [share]
```html
<a href="https://plus.google.com/share?url={URL}" class="socialBtn socialBtn--googlePlus">Google+</a>

<!-- Example-->
<a href="https://plus.google.com/share?url=http://https://github.com/mrmartineau/SimpleSharing/" class="socialBtn socialBtn--googlePlus">Google+</a>
```


#### Pinterest [pin]
```html
<a href="//pinterest.com/pin/create/button/?url={URL}&media={IMAGE_URL}&description={DESCRIPTION}">Pin it</a>

<!-- Example-->
<a href="//pinterest.com/pin/create/button/?url=http://https://github.com/mrmartineau/SimpleSharing/&media=https://avatars0.githubusercontent.com/u/64883?v=3&s=460&description=Simple sharing links">Pin it</a>
```


#### Instapaper [read later]
```html
<a href="http://www.instapaper.com/hello2?url={URL}&amp;title={TITLE}">Read Later</a>

<!-- Example-->
<a href="http://www.instapaper.com/hello2?url=http://https://github.com/mrmartineau/SimpleSharing/&amp;title=Simple sharing links">Read Later</a>
```


#### LinkedIn [share]
```html
<a href="https://www.linkedin.com/cws/share?url={URL}&original_referer={REFERRER}">LinkedIn</a>

<!-- Example-->
<a href="https://www.linkedin.com/cws/share?url=http://https://github.com/mrmartineau/SimpleSharing/&original_referer=https://github.com/mrmartineau/SimpleSharing/">LinkedIn</a>
```


#### The Fancy [fancy it]
```html
<a href="http://www.thefancy.com/fancyit?ItemURL={URL}&Title={TITLE}&Category={CATEGORY}&ImageURL={IMAGE_URL}">Fancy</a>

<!-- Example-->
<a href="http://www.thefancy.com/fancyit?ItemURL=http://https://github.com/mrmartineau/SimpleSharing/&Title=Simple sharing links&ImageURL=https://avatars0.githubusercontent.com/u/64883?v=3&s=460">Fancy</a>
```


#### Tumblr [share]
```html
<a href="http://www.tumblr.com/share/link?url={URL}&name={NAME}&description={DESCRIPTION}" title="Share on Tumblr">Share on Tumblr</a>

<!-- Example-->
<a href="http://www.tumblr.com/share/link?url=https://github.com/mrmartineau/SimpleSharing/&name=Simple sharing links&description=Simple sharing links for your projects" title="Share on Tumblr">Share on Tumblr</a>
```

#### Whatsapp [share]
```html
<a href="whatsapp://send?text={MESSAGE CONTENT}" title="Share on Whatsapp">Share on Whatsapp</a>

<!-- Example-->
<a href="whatsapp://send?text=Have a look at https://github.com/mrmartineau/SimpleSharing/ for some great, simple sharing links" title="Share on Whatsapp">Share on Whatsapp</a>
```
