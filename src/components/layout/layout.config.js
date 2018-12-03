module.exports = {
  title: "Layout",
  label: "Layout",
  collated: true,
  collator: function(markup, item) {
    return `<div class="variant"><h2 class="label">${item.label}</h2> <a class="link" target="_blank" href="../preview/${item.handle}">View</a> <div class="content">${markup}</div> </div>`;
   },
  variants: 
  [
    {
      name: "default",
      label: "Section",
      context: {
        markup: '<section><h2>Heading</h2><p>Entering that gable-ended Spouter-Inn, you found yourself in a wide, low, straggling entry with old-fashioned wainscots, reminding one of the bulwarks of some condemned old craft. On one side hung a very large oilpainting so thoroughly besmoked, and every way defaced, that in the unequal crosslights by which you viewed it, it was only by diligent study and a series of systematic visits to it, and careful inquiry of the neighbors, that you could any way arrive at an understanding of its purpose. Such unaccountable masses of shades and shadows, that at first you almost thought some ambitious young artist, in the time of the New England hags, had endeavored to delineate chaos bewitched. But by dint of much and earnest contemplation, and oft repeated ponderings, and especially by throwing open the little window towards the back of the entry, you at last come to the conclusion that such an idea, however wild, might not be altogether unwarranted.</p></section>'
      },
    },
    {
      name: "Full",
      label: "Full Width (with standard column)",
      context: {
        markup: '<section class="full"><image src="/components/raw/layout/1701-03-contemporary-dance-poster-0094.jpg" /><div class="column"><p>But what most puzzled and confounded you was a long, limber, portentous, black mass of something hovering in the centre of the picture over three blue, dim, perpendicular lines floating in a nameless yeast. A boggy, soggy, squitchy picture truly, enough to drive a nervous man distracted. Yet was there a sort of indefinite, half-attained, unimaginable sublimity about it that fairly froze you to it, till you involuntarily took an oath with yourself to find out what that marvellous painting meant. Ever and anon a bright, but, alas, deceptive idea would dart you through.—It’s the Black Sea in a midnight gale.—It’s the unnatural combat of the four primal elements.—It’s a blasted heath.—It’s a Hyperborean winter scene.—It’s the breaking-up of the icebound stream of Time. But at last all these fancies yielded to that one portentous something in the picture’s midst. That once found out, and all the rest were plain. But stop; does it not bear a faint resemblance to a gigantic fish? even the great leviathan himself?</p><p>In fact, the artist’s design seemed this: a final theory of my own, partly based upon the aggregated opinions of many aged persons with whom I conversed upon the subject. The picture represents a Cape-Horner in a great hurricane; the half-foundered ship weltering there with its three dismantled masts alone visible; and an exasperated whale, purposing to spring clean over the craft, is in the enormous act of impaling himself upon the three mast-heads.</p></div></section>'
      },
    },
  ],
};