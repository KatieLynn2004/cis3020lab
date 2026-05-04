document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     HOME FORM
  ========================= */
  const homeForm = document.getElementById("homeCommentForm");

  if (homeForm) {
    homeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("homeName").value;
      const message = document.getElementById("homeFormMessage");

      message.textContent = `Thanks ${name}! Your comment was received.`;

      homeForm.reset();
    });
  }

  /* =========================
     COMMUNITY FORM
  ========================= */
  const communityForm = document.getElementById("communityForm");

  if (communityForm) {
    communityForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("communityName").value;
      const message = document.getElementById("communityFormMessage");

      message.textContent = `Thanks ${name}! Your submission was received.`;

      communityForm.reset();
    });
  }

  /* =========================
     CLICK INTERACTION (GALLERY)
  ========================= */
  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    item.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });

});