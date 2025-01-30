## Instagram Homepage - Clone

First, I went to check the original layout by going to https://www.instagram.com/.

![3 main sections](/public/image.png)

I then went to create these 3 components first: the **MobileMockup**, the **LoginCard**, and the **Footer**. For the dimensions of each components, I mostly used a browser extension called [Screen Ruler](https://chromewebstore.google.com/detail/screen-ruler-measure-the/jfbbgijjljfbolelfkopkhbfjajjampm) and the dev browser tool's elements tab. For the colors, I used [Eye Dropper](https://chromewebstore.google.com/detail/eye-dropper/hmdcmlfkchdmnmnmheododdhjedfccka) extension. As for the mockup images, I grabbed them in the sources panel. I also used [Gimli Tailwind](https://gimli.app/tailwind) browser extension to experiment with the styling.

To get the responsiveness as close as possible to the original, I observed how it works by using `Toggle device emulation` in the dev tools.

My implementation:

https://github.com/user-attachments/assets/898b5cec-f00b-444e-a134-958cd3f85651

The original implementation:

https://github.com/user-attachments/assets/f25a6c91-5883-4fe8-95ac-1821fd5dae59

I also had to use a lot of arbitrary values for the spacing, alignment, and responsiveness since sometimes using the `sm`, `md`, and others weren't going to match the original.

I also observed the input behavior of the original like how it continues to disable button until password input has atleast 6 characters. And how the placeholder occupied the top half of the input once there's a typing event that happens. 

I've never really implemented a floating label input from scratch so I had to search it up on google and found multiple examples like [this](https://codepen.io/avstorm/pen/gKGbxo) and [this](https://crinkles.dev/writing/combining-placeholder-shown-and-has-selectors/). I also used [Tailwind Play](https://play.tailwindcss.com/) to experiment before applying it on the project.

As for the displaying of errors, I added this as well:

![alt text](/public/sample-error.png)

This "error" will show after clicking the **Log in** button.

Overall, I focused on using tools and existing solutions to solve problems efficiently. Browser extensions like Eye Dropper and Screen Ruler helped me match colors and spacing accurately, while CSS code snippets from the community saved time. This let me pay close attention to Instagram’s details, like how the login button stays disabled until the password is valid, or how the layout adjusts on smaller screens. I learned a lot from studying their approach and appreciate the tools that made it easier. 🤍

----

### Run locally
```bash
git clone https://github.com/j-nielle/insta-homepage.git
```

```bash
cd insta-homepage && npm i && npm run dev
```
