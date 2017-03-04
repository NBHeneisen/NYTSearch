$(document).ready(function() {
//on submit {
//    make api call
// clear button #clearResults
// search input searchParam, bYear input is startYear, endYear
$("#searchButton").on("click",function(){
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    
    // handle possible blank date inputs

    var param = {
   	  'api-key': "3dd53d737834429ea3b96b2a841db4e8",
      'q': $("#searchParam").val(),
      // to do: handle input errors
      'hl':'true',
      'fl':'web_url,snippet,headline,pub_date,byline,word_count'
    } 
    var bDate = $("#startYear").val();
 //     'begin_date': bDate,
 //     'end_date': eDate,
    if (bDate!="") {
        bDate+="0101";
        param.begin_date=bDate;
    }
    var eDate = $("#endYear").val();
    if (eDate!="") {
        eDate+="1231";
        param.end_date=eDate;
    }
    console.log(eDate);
    console.log(bDate);
    url += '?' + $.param({
    param
    });
    console.log(param);
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(articles) {
      console.log(articles);
//    output results
		var articles = articles.response;
		console.log(articles);
//        if articles.docs.length < articleNum (from user input)
//            then articleNum = articles.docs.length
//        iterate through articles.docs from 0 to articleNum
//            add to HTML: headline, byline, snippet (pub date, word count)

    }).fail(function(err) {
      throw err;
    });
});    // end of search click function

}); //end document