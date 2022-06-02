const latest_stories = document.getElementById("latest_stories");

const fetchData = async () => {
  let response = await fetch("http://localhost:5000/getTimeStories");
  let finalData = await response.json();

  console.log(finalData);
  latest_stories.innerHTML += finalData.map(
    ele => `<h3><a href="${ele.link}">${ele.title}</a></h3>`
  );
};

fetchData();
