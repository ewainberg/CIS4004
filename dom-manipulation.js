function showFilter() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  const isVisible = filterForm.style.display !== "none";
  filterForm.style.display = isVisible ? "none" : "block";
  newForm.style.display = "none";
}

function showAddNew() {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  const isVisible = newForm.style.display !== "none";
  newForm.style.display = isVisible ? "none" : "flex";
  filterForm.style.display = "none";
}

function filterArticles() {
  const showOpinion = document.getElementById("opinionCheckbox").checked;
  const showRecipe = document.getElementById("recipeCheckbox").checked;
  const showUpdate = document.getElementById("updateCheckbox").checked;

  const articles = document.querySelectorAll("#articleList article");
  for (const a of articles) {
    const isOpinion = a.classList.contains("opinion");
    const isRecipe = a.classList.contains("recipe");
    const isUpdate = a.classList.contains("update");

    let visible = true;
    if (isOpinion) visible = showOpinion;
    else if (isRecipe) visible = showRecipe;
    else if (isUpdate) visible = showUpdate;

    a.style.display = visible ? "" : "none";
  }
}

function addNewArticle() {
  const titleEl = document.getElementById("inputHeader");
  const textEl = document.getElementById("inputArticle");

  const title = (titleEl.value || "").trim();
  const text = (textEl.value || "").trim();

  const opinionRadio = document.getElementById("opinionRadio");
  const recipeRadio = document.getElementById("recipeRadio");
  const lifeRadio = document.getElementById("lifeRadio");

  let typeClass = "";
  let markerText = "";

  if (opinionRadio.checked) {
    typeClass = "opinion";
    markerText = "Opinion";
  } else if (recipeRadio.checked) {
    typeClass = "recipe";
    markerText = "Recipe";
  } else if (lifeRadio.checked) {
    typeClass = "update";
    markerText = "Update";
  }

  if (!title || !text || !typeClass) return;

  const articleList = document.getElementById("articleList");
  const article = document.createElement("article");
  article.className = typeClass;

  const marker = document.createElement("span");
  marker.className = "marker";
  marker.textContent = markerText;

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const pText = document.createElement("p");
  pText.textContent = text;

  const pLink = document.createElement("p");
  const a = document.createElement("a");
  a.href = "moreDetails.html";
  a.textContent = "Read more...";
  pLink.appendChild(a);

  article.appendChild(marker);
  article.appendChild(h2);
  article.appendChild(pText);
  article.appendChild(pLink);

  articleList.appendChild(article);

  titleEl.value = "";
  textEl.value = "";
  opinionRadio.checked = false;
  recipeRadio.checked = false;
  lifeRadio.checked = false;

  filterArticles();
}

document.addEventListener("DOMContentLoaded", () => {
  const filterForm = document.getElementById("filterContent");
  const newForm = document.getElementById("newContent");

  filterForm.style.display = "none";
  newForm.style.display = "none";

  filterArticles();
});
