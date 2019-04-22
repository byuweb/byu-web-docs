module.exports = {
  title: "Headers",
  label: "Header",
  status: "wip",
  collated: true,
  collator: function(markup, item) {
    return `<div class="variant"><h2 class="label">${item.label}</h2> <a class="link" target="_blank" href="../preview/${item.handle}">View</a> <div class="content">${markup}</div> </div>`;
   }
};