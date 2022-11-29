// alert("Hola mundo");

var jsonfb = FB.api(
    '/450168225422129/insights',
    'GET',
    {
        "metric":"page_engaged_users,page_impressions_unique,page_posts_impressions",
        "period":"day",
        "since":"2021-12-10",
        "until":"2021-12-14"}
    

  );

  function llamarAPI() {
    // Insert your code here
    console.log(jsonfb);
}
llamarAPI();