---
layout: default
---

<div class="umbrella_home-top">
  <div class="homepage-animation">
    <h2 data-splitting>{{page.content}}</h2>
  </div>
</div>

<div class="umbrella_work">
  <div class="flex">
    {% assign projects = site.projects %}
    {% for project in projects %}
    <div class="project_wrapper">
      <div class="project_inner">
        <div class="work_wrapper">
          {% assign images = project.['Project Images'] %}
          {% for image in images %}
            <img src="{{image.Image}}">
          {% endfor %}
        </div>
        <div class="dots">
          {% assign images = project.['Project Images'] %}
          {% for image in images %}
            <div class="dot"></div>
          {% endfor %}
        </div>
      </div>
      <div class="text-wrapper">
        <h1 data-splitting>{{project.title}}</h1>
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.856 17.046l-10.79 1.646c-.661.101-1.196-.36-1.194-1.03L.911 6.75c.002-.67.54-1.295 1.203-1.396.662-.1 1.197.36 1.194 1.03l-.028 7.986L15.121.634l1.69 1.456L4.97 15.825l7.894-1.204c.662-.101 1.197.36 1.195 1.03-.002.67-.541 1.294-1.203 1.395z" fill="#000"/></svg>
      <div>
      </div>
    {% endfor %}
  </div>
</div>
