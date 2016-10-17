

var header = document.getElementById("header");

header.style = "background:grey; border:2px solid black; padding:10px;";

var title = document.createElement("h1");
title.textContent="Random Quote Generator"
header.appendChild(title);
var description = document.createElement("p");
description.innerHTML = "Description of Project"
header.appendChild(description);