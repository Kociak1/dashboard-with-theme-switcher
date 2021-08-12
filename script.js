const Switch = document.querySelector('#switch')

Switch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})


const Follows = [
	{
		topi: "fb",
		img: "images/icon-facebook.svg",
		name: "@nathanf",
		h3: 1987,
		span: "Followers",
		isUp: true,
		number: "12 Today"
	},
	{
		topi: "tw",
		img: "images/icon-twitter.svg",
		name: "@nathanf",
		h3: 1044,
		span: "Followers",
		isUp: true,
		number: "99 Today"
	},
	{
		topi: "ins",
		img: "images/icon-instagram.svg",
		name: "@realnathanf",
		h3: "11k",
        span: "Followers",
		isUp: true,
		number: "99 Today"
	},
	{
		topi: "yt",
		img: "images/icon-youtube.svg",
		name: "Nathan F.",
		h3: 8239,
        span: "Subscribers",
		isUp: false,
		number: "144 Today"
	}
]

const follow = document.querySelector('#tp1')
const follows = document.querySelector('.follows')

Follows.forEach(foll => {
    const post = document.importNode(follow.content, true)
    post.querySelector('.top').classList.add(foll.topi)
    post.querySelector('img').src = foll.img
    post.querySelector('.icon span').textContent = foll.name
    post.querySelector('h3 b').textContent = foll.h3
    post.querySelector('h3 span').textContent = foll.span
    isGood(foll.isUp, post.querySelector('.t'))
    post.querySelector('.t span').textContent = foll.number
    follows.appendChild(post)
})

function isGood(condition, el) {
    if (condition) {
        el.classList.add('cursor')
    } else {
        el.classList.add('cursor-bad')
        el.querySelector('img').src = 'images/icon-down.svg'
    }
}

const Overviews = [
	{
		p: "Page Views",
		img: "images/icon-facebook.svg",
		h3: 87,
		span: "3%",
		isUp: true
	},
	{
		p: "Likes",
		img: "images/icon-facebook.svg",
		h3: 52,
		span: "2%",
		isUp: false
	},
	{
		p: "Likes",
		img: "images/icon-instagram.svg",
		h3: 5462,
		span: "2257%",
		isUp: true
	},
	{
		p: "Profile Views",
		img: "images/icon-instagram.svg",
		h3: "52k",
		span: "1357%",
		isUp: true
	},
	{
		p: "Retweets",
		img: "images/icon-twitter.svg",
		h3: "117",
		span: "303%",
		isUp: true
	},
	{
		p: "Likes",
		img: "images/icon-twitter.svg",
		h3: "507",
		span: "553%",
		isUp: true
	},
	{
		p: "Likes",
		img: "images/icon-youtube.svg",
		h3: "107",
		span: "19%",
		isUp: false
	},
	{
		p: "Total Views",
		img: "images/icon-youtube.svg",
		h3: "1407",
		span: "12%",
		isUp: false
	}
]

const overw = document.querySelector('#tp2')
const grid = document.querySelector('.grid')

Overviews.forEach(Overview => {
    const post = document.importNode(overw.content, true)
    post.querySelector('p').textContent = Overview.p
    post.querySelector('h3').textContent = Overview.h3
    post.querySelector('span').textContent = Overview.span
    post.querySelector('img').src = Overview.img
    isGood(Overview.isUp, post.querySelector('.t'))
    grid.appendChild(post)
})