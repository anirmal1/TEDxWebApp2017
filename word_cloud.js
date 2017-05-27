(function() {

var layout;
var fill;

window.onload = function() {
	var selector = document.getElementById('select');
	selector.onchange = function() {
		d3.select("#wordcloudsvg").remove();
		showData();
	}
	//createWordCloud();
}

function showData() {
	var value = document.getElementById('select').value;
	if (value != 'none') {
		var xhr = new XMLHttpRequest();
		xhr.onload = createWordCloud;
		xhr.open('GET', 'data/word_cloud_data_' + value + '.txt', true);
		xhr.send();
	}
}

function createWordCloud() {
	var speakerWords = this.responseText.split('\n');
	//var speakerWords = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ');
	var width = document.getElementById('word_cloud').clientWidth;
	fill =  ["#DFDFDF", "#C3C3C3", "#A7A7A7", "#8B8B8B", "#6F6F6F", "#535353", "#373737", "#1B1B1B", "#000000"];
	layout = d3.layout.cloud()
    .size([width, width])
    .words(speakerWords.map(function(d) {
      return {text: d, size: 10 + Math.random() * 90, test: "haha"};
    }))
    .padding(5)
    .rotate(function() { return ~~(Math.random() * 2) * 90; })
    .font("Impact")
    .fontSize(function(d) { return d.size; })
    .on("end", draw);

	layout.start();
	
}


function draw(words) {
  d3.select("#word_cloud").append("svg")
			.attr("id", "wordcloudsvg")
      .attr("width", layout.size()[0])
      .attr("height", layout.size()[1])
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .style("font-size", function(d) { return d.size + "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { 
					return fill[i % fill.length]; 
			})
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });
}

})();
