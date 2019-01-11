module.exports = {
  title: "Layout",
  label: "Layout",
  status: "wip",
  collated: true,
  collator: function(markup, item) {
    return `<div class="variant"><h2 class="label">${item.label}</h2> <a class="link" target="_blank" href="../preview/${item.handle}">View</a> <div class="content">${markup}</div> </div>`;
   },
  variants: 
  [
    {
      name: "default",
      label: "Section margins",
      context: {
        markup: '<section><h2>Standard Margins</h2><p>Sections are centered and have a maximum width of <code>42rem</code>. Content may also be given a class of <code>column</code> to give it the same margins even if it’s outside of a <code>&lt;section&gt;</code>. A section can span the full width with the <code>full</code> class, and content can pop out of the column with the <code>emphasis</code> class. See examples below.</p></section>'
      },
    },
    {
      name: "Column",
      label: "Column (outside of a section)",
      context: {
        markup: '<p class="column">There are plenty of people in Avonlea and out of it, who can attend closely to their neighbor’s business by dint of neglecting their own; but Mrs. Rachel Lynde was one of those capable creatures who can manage their own concerns and those of other folks into the bargain. She was a notable housewife; her work was always done and well done; she “ran” the Sewing Circle, helped run the Sunday-school, and was the strongest prop of the Church Aid Society and Foreign Missions Auxiliary. Yet with all this Mrs. Rachel found abundant time to sit for hours at her kitchen window, knitting “cotton warp” quilts—she had knitted sixteen of them, as Avonlea housekeepers were wont to tell in awed voices—and keeping a sharp eye on the main road that crossed the hollow and wound up the steep red hill beyond. Since Avonlea occupied a little triangular peninsula jutting out into the Gulf of St. Lawrence with water on two sides of it, anybody who went out of it or into it had to pass over that hill road and so run the unseen gauntlet of Mrs. Rachel’s all-seeing eye.</p>'
      },
    },
    {
      name: "Full",
      label: "Full Width (with standard text column)",
      context: {
        markup: '<section class="full"><image src="/components/raw/layout/1701-03-contemporary-dance-poster-0094.jpg" /><div class="column"><p>She was sitting there one afternoon in early June. The sun was coming in at the window warm and bright; the orchard on the slope below the house was in a bridal flush of pinky-white bloom, hummed over by a myriad of bees. Thomas Lynde—a meek little man whom Avonlea people called “Rachel Lynde’s husband”—was sowing his late turnip seed on the hill field beyond the barn; and Matthew Cuthbert ought to have been sowing his on the big red brook field away over by Green Gables. Mrs. Rachel knew that he ought because she had heard him tell Peter Morrison the evening before in William J. Blair’s store over at Carmody that he meant to sow his turnip seed the next afternoon. Peter had asked him, of course, for Matthew Cuthbert had never been known to volunteer information about anything in his whole life.</p></div></section>'
      },
    },
    {
      name: "Emphasis",
      label: "Emphasized item",
      context: {
        markup: '<section><p>And yet here was Matthew Cuthbert, at half-past three on the afternoon of a busy day, placidly driving over the hollow and up the hill; moreover, he wore a white collar and his best suit of clothes, which was plain proof that he was going out of Avonlea; and he had the buggy and the sorrel mare, which betokened that he was going a considerable distance. Now, where was Matthew Cuthbert going and why was he going there?</p><image class="emphasis" src="/components/raw/layout/1701-03-contemporary-dance-poster-0094.jpg" /><p>Had it been any other man in Avonlea, Mrs. Rachel, deftly putting this and that together, might have given a pretty good guess as to both questions. But Matthew so rarely went from home that it must be something pressing and unusual which was taking him; he was the shyest man alive and hated to have to go among strangers or to any place where he might have to talk. Matthew, dressed up with a white collar and driving in a buggy, was something that didn’t happen often. Mrs. Rachel, ponder as she might, could make nothing of it and her afternoon’s enjoyment was spoiled.</p></div></section>'
      },
    },

    {
      name: "Feature",
      label: "Featured item",
      context: {
        markup: '<section><p>And yet here was Matthew Cuthbert, at half-past three on the afternoon of a busy day, placidly driving over the hollow and up the hill; moreover, he wore a white collar and his best suit of clothes, which was plain proof that he was going out of Avonlea; and he had the buggy and the sorrel mare, which betokened that he was going a considerable distance. Now, where was Matthew Cuthbert going and why was he going there?</p><image class="feature" src="/components/raw/layout/1701-03-contemporary-dance-poster-0094.jpg" /><p>Had it been any other man in Avonlea, Mrs. Rachel, deftly putting this and that together, might have given a pretty good guess as to both questions. But Matthew so rarely went from home that it must be something pressing and unusual which was taking him; he was the shyest man alive and hated to have to go among strangers or to any place where he might have to talk. Matthew, dressed up with a white collar and driving in a buggy, was something that didn’t happen often. Mrs. Rachel, ponder as she might, could make nothing of it and her afternoon’s enjoyment was spoiled.</p></div></section>'
      },
    },


  ],
};