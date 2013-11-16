# Social / share links that do not rely on Javascript

#### !! Please help me find a better name for this repo

* Twitter
* Facebook
* Google+
* Instapaper
* LinkedIn
* Tumblr
* Pinterest
* The Fancy

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

#### Twitter [tweet]
```html
<a href="https://twitter.com/intent/tweet?original_referer={REFERRER_URL}&source=tweetbutton&text={TWEET_TEXT}&url={URL}&via={Username}" title="Tweet" class="socialBtn socialBtn--twitter">Tweet</a>
```

#### Facebook [share]
```html
<a href="http://www.facebook.com/share.php?u={URL}&t={TITLE}" class="socialBtn socialBtn--facebook">Share on Facebook</a>
```


#### Google+ [share]
```html
<a href="https://plus.google.com/share?url={URL}" class="socialBtn socialBtn--googlePlus">Google+</a>
```


#### Pinterest [pin]
```html
<a href="//pinterest.com/pin/create/button/?url={URL}&media={IMAGE_URL}&description={DESCRIPTION}">Pin it</a>
```


#### Instapaper [read later]
```html
<a href="http://www.instapaper.com/hello2?url={URL}&amp;title={TITLE}">Read Later</a>
```


#### LinkedIn [share]
```html
<a href="https://www.linkedin.com/cws/share?url=http%3A%2F%2Fblog.easy-designs.net%2Farchives%2F2011%2F12%2F16%2Fjavascript-less-google-finally%2F&original_referer={REFERRER}">LinkedIn</a>
```


#### The Fancy [fancy it]
```html
<a href="http://www.thefancy.com/fancyit?ItemURL={URL}&Title={TITLE}&Category={CATEGORY}&ImageURL={IMAGE_URL}">Fancy</a>
```


#### Tumblr [share]
```html
<a href="http://www.tumblr.com/share/link?url={URL}&name={NAME}&description={DESCRIPTION}" title="Share on Tumblr">Share on Tumblr</a>
```
